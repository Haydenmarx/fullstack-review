const request = require('request');
const config = require('../config.js');

const getReposByUsername = (userName, cb, count) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'FILL ME IN',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request.get(`https://api.github.com/users/${userName}/repos?sort=stars&order=desc`, options, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    cb(body, count);
  });

}

module.exports.getReposByUsername = getReposByUsername;