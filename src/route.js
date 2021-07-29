const express = require('express');
const router = express.Router();
const handleResponse = require('./responseHandler');
const handleMessage = require('./messageHandler');

router.post('/message', [handleMessage], (req, res) => {
  handleResponse(
    res,
    200,
    {
      response_id: req.body.conversation_id,
      response: req.message
    }
  );
})

module.exports = router;