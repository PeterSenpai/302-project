import './App.css';
import './index.css';
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import axios from 'axios';
import Questionnaire from './Questionnaire';
import mockData from './mockQuestionnires.json';

const { Header, Content } = Layout;

function App() {
  const [questionnaires, setQuestionnaires] = useState([]);

  useEffect(() => {
    const fetData = async () => {
      const { data } = await axios.get('/api/questionnaires');
      setQuestionnaires(data);
    };

    if (process.env.NODE_ENV === 'test') {
      setQuestionnaires(mockData);
    } else {
      fetData();
    }
  }, []);
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: '0 50px' }}>
        {questionnaires.length !== 0 && <Questionnaire questionnare={questionnaires[0]} />}
      </Content>
    </Layout>
  );
}

export default App;
