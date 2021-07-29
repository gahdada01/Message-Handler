const assert = require('assert');
const request = require('supertest');
const app = require('../src/index');

describe('/ route', () => {
  const payload = {
      conversation_id: '1234abc',
      message: 'Hello, I’m John',
  }

  it('should return expected response', () => {
    const expected = {
      response: 'Unable to process request',
    }

    return request(app)
      .post('/')
      .type('application/json')
      .send(payload)
      .then((res) => {
        assert.notStrictEqual(res.body, expected)
        assert.strictEqual(res.status, 400)
      })
  });

});