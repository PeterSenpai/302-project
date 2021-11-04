import request from 'supertest';
import app from '../app.js';

const exampleResponse = {
  resourceType: 'QuestionnaireResponse',
  item: [
    {
      linkId: '1',
      text: 'Are you a resident of, or do you travel frequently to, an area with active Zika transmission?',
      answer: [ { valueBoolean: true } ]
    },
    {
      linkId: '2',
      text: 'How long has it been since you returned?',
      answer: [ { valueString: '10 days' } ] 
    }
  ],
  status: 'in-progress'
}

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
    const res = await request(app).post('/api/response').send(exampleResponse)
    expect(res.statusCode).toBe(200);
  });
});
