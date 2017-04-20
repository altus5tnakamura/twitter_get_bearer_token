var request = require('request');

var consumerKey    = '';
var consumerSecret = '';
var credential = (new Buffer(consumerKey + ":" + consumerSecret)).toString('base64');

var headers = {
  'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8',
  'Authorization': ' Basic ' + credential 
};
  
var requestOptions = {
  method : 'POST',
  url    : 'https://api.twitter.com/oauth2/token',
  headers: headers,
  form   : {'grant_type': 'client_credentials'}
}

request(requestOptions, function(error, response, body) {
  if (!error) {
    console.log((JSON.parse(body)).access_token);
    process.exit(0);
  } else  {
    console.error(error);
    process.exit(1);
  }
});