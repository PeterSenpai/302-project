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
