const handleResponse = (res, statusCode, message) => {
  if (statusCode === 200) {
    res.status(statusCode)
    res.json(message)
  }
  else if (statusCode >= 400) {
    res.status(statusCode)
    res.json({ response: 'Unable to process request' })
  }
};

module.exports = handleResponse;