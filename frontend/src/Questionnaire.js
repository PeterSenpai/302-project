import React, { useEffect, useState } from 'react';
import { Button, Form, Row, Typography, message } from 'antd';
import find from 'lodash/find';

import axios from 'axios';

import QuestionItem from './QuestionItem';
import { extractItems, updateValueByLinkIdAndResponseType } from './questionnaireParser';

const { Title } = Typography;

export default function Questionnaire({ questionnare }) {
  const { title, item, text, id } = questionnare;
  const [fieldsToWatch, setFieldsToWatch] = useState({});

  let { questions } = extractItems(item);

  let triggers = {};
  const questionItems = questions.map(question => {
    const { linkId, type, enableWhen } = question;
    if (enableWhen) {
      // [{question: [some_linkId], operator: xxx, answer[xxx]: '' }, ...]
      for (let condition of enableWhen) {
        let { question: triggerLinkId } = condition;
        if (!Object.keys(triggers).includes(triggerLinkId)) {
          let triggerQuestion = find(questions, { linkId: triggerLinkId });
          let triggerType = triggerQuestion.type;
          let initialTriggerValue = null;
          if (type === 'display' || triggerType === 'display') {
            initialTriggerValue = true;
          }

          triggers[triggerLinkId] = initialTriggerValue;
        }
      }

      return <QuestionItem key={linkId} questionData={question} fieldsToWatch={fieldsToWatch} />;
    }
    return <QuestionItem key={linkId} questionData={question} />;
  });

  useEffect(() => {
    setFieldsToWatch(triggers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = async values => {
    try {
      let response = {
        resourceType: 'QuestionnaireResponse',
        status: 'completed',
        text,
        id,
        authored: JSON.stringify(new Date()).replace(/['"]+/g, ''),
        subject: {
          reference: 'http://hl7.org/fhir/Patient/1',
          type: 'Patient',
        },
      };
      let { item: responseItems } = extractItems(item);
      // let responseItems = [...res.item];
      // { [linkId]:{[responseType]: [answerValue]} }
      for (let [key, value] of Object.entries(values)) {
        let resType = Object.keys(value)[0];

        let resValue = value[resType];
        if (resType === 'valueDate') {
          resValue = resValue.format('YYYY-MM-DD');
        }
        if (resType === 'valueDateTime') {
          resValue = JSON.stringify(resValue).replace(/['"]+/g, '');
        }
        if (resType === 'valueTime') {
          resValue = resValue.format('hh:mm:ss');
        }

        updateValueByLinkIdAndResponseType(responseItems, key, resType, resValue);
      }
      response.item = responseItems;

      await axios.post('/api/response', response);
      message.success('Successfully submit your response!');
    } catch (error) {
      message.error('Something went wrong, try to submit again!');
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const onFieldsChange = (changedFields, allFields) => {};

  const onValuesChange = (changedValues, allValues) => {
    for (let [linkId, valueObj] of Object.entries(changedValues)) {
      let valType = Object.keys(valueObj)[0];
      let val = valueObj[valType];
      if (Object.keys(fieldsToWatch).includes(linkId)) {
        setFieldsToWatch({
          ...fieldsToWatch,
          [linkId]: val,
        });
      }
    }
  };

  return (
    <>
      <Row justify="center" gutter={{ xs: 24, sm: 24, md: 12, lg: 12 }}>
        <Title
          level={2}
          style={{
            paddingTop: '2.5rem',
          }}
        >
          {title}
        </Title>
      </Row>
      <Form
        layout="vertical"
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onFieldsChange={onFieldsChange}
        onValuesChange={onValuesChange}
        autoComplete="off"
        style={{ paddingTop: '2.5rem' }}
      >
        {questionItems}
        <Row justify="center">
          <Form.Item>
            <Button size="large" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </>
  );
}
