const handleResponse = require('./responseHandler')

const validatePayload = (payload) => {
  return payload.hasOwnProperty('conversation_id') && payload.hasOwnProperty('message');
}

const processMessage = (req, message) => {
  const lowerCaseMessage = message.toLowerCase();
  const isGreetings = lowerCaseMessage.includes('hi') | lowerCaseMessage.includes('hello');
  const isGoodbye = lowerCaseMessage.includes('goodbye') | lowerCaseMessage.includes('bye')
  
  if (message) {
    if (isGreetings) {
      req.message = 'Welcome to StationFive.';
    }
    else if (isGoodbye) {
      req.message = 'Thank you, see you around.';
    }
    else {
      req.message = 'Sorry, I don’t understand';
    }
  }
  else {
    req.message = 'Sorry, I don’t understand';
  }
}

const handleMessage = (req, res, next) => {
  const payload = req.body;

  if (validatePayload(payload)) {
    processMessage(req, payload.message)
    next();
  }
  else {
    handleResponse(res, 400);
  }
};

module.exports = handleMessage