import supertest from 'supertest';
import app from '../../src/app';

describe('GET /health', () => {
  it('should return "OK!"', async () => {
    const response = await supertest(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.text).toBe('OK!');
  });
});
