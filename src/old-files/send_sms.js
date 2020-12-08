// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC209306eb439a3198f2e8d0a185804137';
const authToken = '3094ed998aa2662c8f2c7613e1d5475f';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12056547456',
     to: '+19472050784'
   })
  .then(message => console.log(message.sid));