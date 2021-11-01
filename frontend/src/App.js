import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Form, Input, Button, Radio  } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <Layout className="layout">
      <Header/>
      <Content style={{ padding: '0 50px' }}>
        <Form
          layout="vertical"
          name="basic"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item 
            label="Are you a resident of, or do you travel frequently to, an area with active Zika transmission?" 
            name="resident"
            rules={[
              {
                required: true,
                message: 'Please answer this question!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>Yes</Radio>
              <Radio value={2}>No</Radio>
            </Radio.Group>
          </Form.Item>
      
          <Form.Item 
            label="Have you recently traveled to an area with active Zika transmission?" 
            name="recent_travel"
            rules={[
              {
                required: true,
                message: 'Please answer this question!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>Yes</Radio>
              <Radio value={2}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="How long has it been since you returned?"
            name="time_since_return"
            rules={[
              {
                required: true,
                message: 'Please answer this question!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item 
            label="Have you recently had condomless sex with a partner that has travelled in an area with active Zika transmission?" 
            name="recent_sex"
            rules={[
              {
                required: true,
                message: 'Please answer this question!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>Yes</Radio>
              <Radio value={2}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="How long has it been since your last condomless sexual encounter?"
            name="time_since_sex"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item 
            label="Do you plan to travel to an area with active Zika transmission?" 
            name="travel_plan"
            rules={[
              {
                required: true,
                message: 'Please answer this question!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>Yes</Radio>
              <Radio value={2}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Patient Questionnaire Web App ©2021 Created by JAPL</Footer>
    </Layout>

  );
}

export default App;