import express from 'express';
import cors from 'cors';
import superagent from 'superagent';

import { readFileSync } from 'fs';
// having these 4 lines for b/c of the "type": "module" in package.json
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const QUESTIONNAIRES_FILE = path.join(__dirname, './questionnaires.json');
const QUESTIONNAIRE_RESPONSE_TEST_SERVER_URL = 'http://hapi.fhir.org/baseR4/QuestionnaireResponse';

const app = express();


app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
  res.status(200).send(`welcome!`);
});

app.get('/api/questionnaires', (req, res) => {
  const ques = JSON.parse(readFileSync(QUESTIONNAIRES_FILE));
  return res.status(200).json(ques);
});

app.post('/api/response', (req, res) => {
  console.log('\n ========= Response of questionnaire =========\n');

  const quesResp = req.body;
  console.log(quesResp);
  superagent
    .post(QUESTIONNAIRE_RESPONSE_TEST_SERVER_URL)
    .send(quesResp)
    .set('Content-Type', 'application/json')
    .then(succResp => {
      return res.status(200).json(succResp);
    })
    .catch(errResp => {
      console.error('error');
      console.error(errResp);
      const errText = JSON.parse(errResp.response.text);
      const issue = errText.issue[0];
      console.error(errResp.message, issue);
      return res.status(errResp.status).json({ message: issue.diagnostics });
    });
});

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../frontend/build')));
}

export default app;
