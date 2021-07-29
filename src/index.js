const express = require('express');
const app = express();
const port = '3000';

app.use(express.urlencoded({extended: true}));
app.use(express.json({ type: 'application/json'}))

const handleResponse = require('./responseHandler')

// routes
const message = require('./route');
app.post('/message', message)

// handle unavailable routes
app.use((req, res)  => {
  handleResponse(res, 400);
});

app.listen(port, () => {
  console.log(`Started server at http://localhost:${port}`)
});

module.exports = app;