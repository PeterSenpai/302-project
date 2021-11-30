import React from 'react';
import {
  Divider,
  Form,
  Input,
  Row,
  Col,
  Radio,
  Typography,
  Space,
  InputNumber,
  DatePicker,
  TimePicker,
} from 'antd';
const { Title } = Typography;
const { Item } = Form;

export default function QuestionItem({ questionData, fieldsToWatch }) {
  let { linkId, text, type, responseType, answerOption, answerValueSet, enableWhen } = questionData;

  let numberOfFail = 0;

  //enableWhen
  if (enableWhen) {
    for (let condition of enableWhen) {
      let { question: triggerLinkId, operator, ...rest } = condition;
      let triggerValue = null;
      let triggerValueType = Object.keys(rest)[0];
      if (triggerValueType === 'answerCoding') {
        triggerValue = rest.answerCoding.code;
      } else {
        triggerValue = Object.values(rest)[0];
      }

      let currentValue = fieldsToWatch[triggerLinkId];
      switch (operator) {
        case 'exists':
          numberOfFail += currentValue ? 0 : 1;
          break;
        case '=':
          numberOfFail += triggerValue === currentValue ? 0 : 1;
          break;
        case '!=':
          numberOfFail += triggerValue !== currentValue ? 0 : 1;

          break;
        case '>':
          numberOfFail += triggerValue > currentValue ? 0 : 1;
          break;
        case '<':
          numberOfFail += triggerValue > currentValue ? 0 : 1;
          break;
        case '>=':
          numberOfFail += triggerValue >= currentValue ? 0 : 1;
          break;
        case '<=':
          numberOfFail += triggerValue <= currentValue ? 0 : 1;
          break;
        default:
          numberOfFail += 0;
      }
    }
  } else {
    numberOfFail = 0;
  }

  if (!text) {
    // https://www.hl7.org/fhir/questionnaire-example.json
    // no question text
    numberOfFail += 1;
  }
  let formContent = null;

  switch (type) {
    case 'boolean':
      formContent = (
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Space>
        </Radio.Group>
      );
      break;
    case 'string':
      formContent = <Input allowClear />;
      break;
    case 'text':
      formContent = <Input allowClear />;
      break;
    case 'decimal':
      formContent = <InputNumber formatter={value => (value ? parseFloat(value) : 0)} />;
      break;
    case 'integer':
      formContent = <InputNumber formatter={value => (value ? parseInt(value) : 0)} />;
      break;
    case 'dateTime':
      formContent = <DatePicker showTime />;
      break;
    case 'date':
      formContent = <DatePicker format="YYYY-MM-DD" />;
      break;
    case 'time':
      formContent = <TimePicker />;
      break;
    case 'choice':
      // assume either answerOption or answerValueSet is present (they should)
      if (answerOption) {
        // answerOption = [{valueCode: 'xxx', display: 'xxx'}]
        let radioItems = answerOption.map(option => {
          let { code, display } = option.valueCoding;
          if (!display) {
            display = code;
          }
          return (
            <Radio key={code} value={code}>
              {display}
            </Radio>
          );
        });
        formContent = (
          <Radio.Group>
            <Space direction="vertical">{radioItems}</Space>
          </Radio.Group>
        );
      } else {
        formContent = <Title level={6}>ValueSet: {answerValueSet} is not yet support</Title>;
      }
      break;

    default:
      numberOfFail += 1;
      formContent = <Title level={6}>Fail to render the question with type: {type}</Title>;
  }
  return numberOfFail > 0 ? null : (
    <Row>
      <Col
        xs={{ span: 24, offset: 0 }}
        sm={{ span: 24, offset: 0 }}
        md={{ span: 14, offset: 5 }}
        lg={{ span: 14, offset: 5 }}
        xl={{ span: 14, offset: 5 }}
        xxl={{ span: 10, offset: 7 }}
      >
        <Title
          level={4}
          style={{
            paddingBottom: '0.5rem',
          }}
        >
          {text} : {linkId}
        </Title>
        <Item
          name={[linkId, responseType]}
          // hidden={hidden}
          // rules={[
          //   {
          //     required: true,
          //     message: 'Please answer this question!',
          //   },
          // ]}
          style={{
            paddingBottom: '0.5rem',
          }}
        >
          {formContent}
        </Item>
        <Divider />
      </Col>
    </Row>
  );
}
