const accountSid = 'AC6e66236e580fc4044de852fb996dd6ab';
const authToken = 'bde7199afae62e5926d61f0f196cfb07';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({ body: 'Hi this is anther msg for test there', from: '+18566662113', to: '+9779844391441'})
  .then(message => console.log(message.sid));
