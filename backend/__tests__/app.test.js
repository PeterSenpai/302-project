import request from 'supertest';
import app from '../app.js';

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
