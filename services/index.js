var sendgrid = require ('./sendgrid');
var sparkpost = require ('./sparkpost');

exports.email = function(sender, recipient, subject, text) {
  //sendgrid is our default provider the last arguement is a fallback to sparkpost should sendgrids service fail
  sendgrid.email(sender, recipient, subject, text, sparkpost.email);
}
