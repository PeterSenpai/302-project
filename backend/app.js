import { readFileSync } from 'fs';

import express from 'express';
import cors from 'cors';

// having these 4 lines for b/c of the "type": "module" in package.json
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const QUESTIONNAIRES_FILE = path.join(__dirname, './questionnaires.json');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
  res.status(200).send(`welcome!`);
});

app.get('/api/questionnaires', (req, res) => {
  let ques = JSON.parse(readFileSync(QUESTIONNAIRES_FILE));
  res
  .json(ques)
  .status(200)
  .send();
})

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../frontend/build')));
}

export default app;
