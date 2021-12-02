import request from 'supertest';
import app from '../app.js';
import { readFileSync } from 'fs';
// having these 4 lines for b/c of the "type": "module" in package.json
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const EXAMPLE_RESPONSE_FILE = path.join(__dirname, './example-response.json');
const exampleResponse = JSON.parse(readFileSync(EXAMPLE_RESPONSE_FILE));


describe('GET /test', () => {
  it('should return welcome text', async () => {
    console.log(`========= Backend: I am running a test! =========`);
    request(app)
      .get('/test')
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw new Error('I have failed you, Anakin');
        }
        expect(res.text).toBe('welcome!');
      });
  });
});

describe('GET /api/questionnaires', () => {
  it('should return JSON questionnaires', async() => {
    request(app)
      .get('/api/questionnaires')
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw new Error('Failed to get questionnaires');
        }
        for(let i = 0; i < res.body.length; i++){
          expect(res.body[i].resourceType).toBe('Questionnaire');
        }
      });
  });
});

describe('POST /api/response', () => {
  it('should receive questionnaire response', async() => {
    const res = await request(app).post('/api/response').send(exampleResponse);
    expect(res.statusCode).toBe(200);
  });
});
