var SparkPost = require('sparkpost');
var client = new SparkPost(process.env.SPARKPOST_API_KEY);

exports.email = function(sender, recipient, subject, text) {
  sender = 'sandbox@sparkpostbox.com' // remove this line if you have a sending domain set with sparkpost!!
  client.transmissions.send({
    options: {
      sandbox: true
    },
    content: {
      from: sender,
      subject,
      html:`<html><body><p>${text}</p></body></html>`
    },
    recipients: [
      {
        address: recipient,
      }
    ]
  })
  .then(data => {
    console.log('Mail sent successfully!');
  })
  .catch(err => {
    console.log('Something went wrong');
    console.log(err);
  });
}