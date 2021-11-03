import React from 'react';
import { Divider, Form, Input, Row, Col, Radio, Typography, Space } from 'antd';
const { Title } = Typography;
const { Item } = Form;

export default function QuestionItem({ data, index }) {
  const { type, title } = data;
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
    default:
      formContent = <Title level={6}>Fail to render the question</Title>;
  }
  return (
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
          {title}
        </Title>
        <Item
          name={index}
          rules={[
            {
              required: true,
              message: 'Please answer this question!',
            },
          ]}
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
