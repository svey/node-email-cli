var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var inquirer = require('inquirer');
var service = require ('./services');

var cliSetup = function() {
  clear();
  console.log(
    chalk.green(
      figlet.textSync('EMAIL', { horizontalLayout: 'full' })
    )
  );
};

var run = function(callback) {
  var questions = [
    {
      name: 'sender',
      type: 'input',
      message: 'What is your email address:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your e-mail address';
        }
      }
    },
    {
      name: 'recipient',
      type: 'input',
      message: 'What is the recipient\'s email address:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter the recipient\'s email address';
        }
      }
    },
    {
      name: 'subject',
      type: 'input',
      message: 'What is the subject of your email:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter a subject';
        }
      }
    },
    {
      name: 'text',
      type: 'input',
      message: 'Please type your message:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please say something';
        }
      }
    }
  ];
  inquirer.prompt(questions).then(callback);
}

cliSetup();

run(function(){
  var { sender, recipient, subject, text } = arguments[0];
  service.email(sender, recipient, subject, text)
});
