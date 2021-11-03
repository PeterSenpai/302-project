import React from 'react';
import { Button, Form, Row, Typography, message } from 'antd';
import { FhirJsonForm, FhirJsonResp } from 'fhirformjs';
import axios from 'axios';
import QuestionItem from './QuestionItem';

const { Title } = Typography;

export default function Questionnaire({ questionnare: data }) {
  const { title: questionnareTitle } = data;
  const { schema, model } = FhirJsonForm(data);

  let questions = [];
  for (const [key, value] of Object.entries(schema.properties)) {
    const question = <QuestionItem key={key} data={value} index={key} />;
    questions.push(question);
  }
  const onFinish = async values => {
    const resp = FhirJsonResp(model, values, schema);
    try {
      await axios.post('/api/response', resp);
      message.success('Successfully submit your response!');
    } catch (error) {
      message.error('Something went wrong, try to submit again!');
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
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
          {questionnareTitle}
        </Title>
      </Row>
      <Form
        layout="vertical"
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ paddingTop: '2.5rem' }}
      >
        {questions}
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
