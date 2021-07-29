# Install packages
 - npm install

# To start the app
 - npm run start

# To test the app
  - npm run test


# Create a simple REST API given the following documentation:

### POST /message

An endpoint that accepts JSON request data with conversation_id and message properties.
The response should be JSON data with response_id being the same as the request’s
conversation_id, and the response would be based on the context table matching the
message.

### Context Table:
If the message contains a word from the context table, return the corresponding response.
First context detected takes priority.

[Hello, Hi] => Welcome to This API.

[Goodbye, bye] => Thank you, see you around.

No Context => Sorry, I don't understand.

### Example Request:

{
conversation_id: 'abcd123',
message: 'Hello, I’m John',
}

### Example Response:

{
response_id: 'abcd123',
response: 'Welcome to This API',
}

### Note: 

Should return an error if the request data is not in the proper format.
