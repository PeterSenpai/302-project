import { v4 as uuidv4 } from 'uuid';

const getValueType = type => {
  switch (type) {
    case 'decimal':
      return 'valueDecimal';
    case 'integer':
      return 'valueInteger';
    case 'text':
      return 'valueString';
    case 'string':
      return 'valueString';
    case 'date':
      return 'valueDate';
    case 'dateTime':
      return 'valueDateTime';
    case 'time':
      return 'valueTime';
    case 'choice':
      return 'valueCoding';
    case 'boolean':
      return 'valueBoolean';
    default:
      // other stuffs are currently out of the scope for example: quantity
      return 'valueString';
  }
};

const updateValueByLinkIdAndType = (item, linkId, type, value) => {
  for (let element of item) {
    if (element.linkId === linkId) {
      let { answer } = element;
      const resType = getValueType(type);
      if (resType === 'valueCoding') {
        answer[0][resType] = { code: value };
      } else {
        answer[0][resType] = value;
      }
    } else {
      // no update on this level at lest
      if (element.item) {
        // means group means no restype or answer, go deeper
        updateValueByLinkIdAndType(element.item, linkId, type, value);
      } else {
        // not group so must have `answer` field and `answer[0]`
        // and since the current element id !== linkId check if there are nested item
        if (element.answer[0].item) {
          // has more nested item, go deeper
          updateValueByLinkIdAndType(element.answer[0].item, linkId, type, value);
        }
      }
    }
  }
};

const updateValueByLinkIdAndResponseType = (item, linkId, resType, value) => {
  for (let element of item) {
    if (element.linkId === linkId) {
      let { answer } = element;
      if (resType === 'valueCoding') {
        answer[0][resType] = { code: value };
      } else {
        answer[0][resType] = value;
      }
    } else {
      // no update on this level at lest
      if (element.item) {
        // means group means no restype or answer, go deeper
        updateValueByLinkIdAndResponseType(element.item, linkId, resType, value);
      } else {
        // not group so must have `answer` field and `answer[0]`
        // and since the current element id !== linkId check if there are nested item
        if (element.answer[0].item) {
          // has more nested item, go deeper
          updateValueByLinkIdAndResponseType(element.answer[0].item, linkId, resType, value);
        }
      }
    }
  }
};

const extractItems = item => {
  let questions = [];
  const acceptedQuestionTypes = [
    'group',
    'question',
    'display',
    'decimal',
    'integer',
    'text',
    'string',
    'date',
    'dateTime',
    'time',
    'choice',
    'boolean',
  ];
  const dfs = item => {
    let responseItemList = [];
    for (let element of item) {
      let responseItem = {};
      let { type, linkId, text } = element;
      // make sure `LinkId` exists
      if (!linkId) {
        element.linkId = uuidv4();
      }

      if (type === 'group') {
        // must has nested items i.e. `item` field not null

        if (element.enableWhen) {
          // if the whole group has `enableWhen` property
          // then give the individual item that props as well

          for (let child of element.item) {
            child.enableWhen = element.enableWhen;
          }
        }

        // get the result of respond should be an array
        const result = dfs(element.item);
        // no `answer` but only item and link id
        responseItem.item = result;
        responseItem.linkId = linkId;
      } else {
        // make sure the type of the question is supported
        if (!acceptedQuestionTypes.includes(type)) {
          element.type = 'string';
        }

        // get responseType
        const resType = getValueType(type);
        element.responseType = resType;

        // push the item no matter what (it's a valid question)
        questions.push(element);

        // since it's a question, it should have an answer
        let answer = [{ [resType]: '' }];

        if (!element.item) {
          // regular question
          responseItem.linkId = linkId;
          responseItem.text = text;
          responseItem.answer = answer;
        } else {
          // question with nested stuffs

          // get result should be an array
          const result = dfs(element.item);
          answer[0].item = result;
          responseItem.linkId = linkId;
          responseItem.text = text;
          responseItem.answer = answer;
        }
      }
      responseItemList.push(responseItem);
    }
    return responseItemList;
  };
  const res = dfs(item);
  return { questions, item: res };
};

export {
  getValueType,
  extractItems,
  updateValueByLinkIdAndType,
  updateValueByLinkIdAndResponseType,
};
