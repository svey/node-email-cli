# node-email-cli

A simple CLI for sending emails with Sendgrid(primary) and Sparkpost(fallback)

## To use:
1. From the Repo's local directory on your machine in Terminal or CommandPrompt run:
    + npm install  
    + npm start  
2. Set the environment variable SENDGRID_API_KEY and SPARKPOST_API_KEY
3. If you have not setup your sending domain with https://sendgrid.com/ and https://www.sparkpost.com/ domain please use test@example.com as your email
4. If you have setup your sending domain please navigate to services/sparkpost.js and comment out //line 5
5. Run 'npm start' from the node-email-cli root directory
    
## Built with:
+ Node.JS
+ NPM modules
  + chalk
  + clear
  + figlet
  + inquirer
  + sendgrid
  + sparkpost
