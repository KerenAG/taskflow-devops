const request = require('supertest');
const app = require('../server');

describe('TaskFlow Application', () => {
  test('GET / should return the homepage', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('TaskFlow');
  });

  test('GET /api/health should return status OK', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});