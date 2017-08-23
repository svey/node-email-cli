//sendGrid modules
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var helper = require('sendgrid').mail;


exports.email = function(sender, recipient, subject, text, fallback) {
  var fromEmail = new helper.Email(sender);
  var toEmail = new helper.Email(recipient);
  var content = new helper.Content('text/plain', text);
  var mail = new helper.Mail(fromEmail, subject, toEmail, content);

  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function (error, response) {
    if (error) {
      console.log('Something went wrong; falling back to an alternative service');
      fallback(sender, recipient, subject, text);
    } else {
      console.log('Mail sent successfully!');
    }
  });
}
