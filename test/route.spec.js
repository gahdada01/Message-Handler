const assert = require('assert');
const request = require('supertest');
const app = require('../src/index');

describe('/message route', () => {
  const payload = {
      conversation_id: '1234abc',
      message: '',
  }

  it('should return expected No Context response', () => {
    const expected = {
      response: 'Sorry, I don’t understand',
      response_id: '1234abc',
    }

    return request(app)
      .post('/message')
      .type('application/json')
      .send(payload)
      .then((res) => {
        assert.strictEqual(res.status, 200)
        assert.deepStrictEqual(res.body, expected)
      })
  });

  it('should return expected Greetings response', () => {
    const expected = {
      response: 'Welcome to StationFive.',
      response_id: '1234abc',
    }

    payload.message = 'hi I’m John';
    
    return request(app)
      .post('/message')
      .type('application/json')
      .send(payload)
      .then((res) => {
        assert.strictEqual(res.status, 200)
        assert.deepStrictEqual(res.body, expected)
      })
  });

  it('should return expected Goodbye response', () => {
    const expected = {
      response: 'Thank you, see you around.',
      response_id: '1234abc',
    }

    payload.message = 'thanks and goodbye';
    
    return request(app)
      .post('/message')
      .type('application/json')
      .send(payload)
      .then((res) => {

        assert.strictEqual(res.status, 200)
        assert.deepStrictEqual(res.body, expected)
      })
  });

  it('should return 400 status', () => {
    delete payload.message;
    
    return request(app)
      .post('/message')
      .type('application/json')
      .send(payload)
      .then((res) => {
        assert.strictEqual(res.status, 400)
      })
  });
});