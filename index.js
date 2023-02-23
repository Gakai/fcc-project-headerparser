// Boilerplate code from https://github.com/freeCodeCamp/boilerplate-project-timestamp

// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.all('/api/whoami', function(req, res) {
  const { headers, method, httpVersion, protocol, hostname, path, query } = req
  res.json({
    // required by challenge
    ipaddress: req.ip,
    language: headers['accept-language'],
    software: headers['user-agent'],
    // optional
    cookies: headers['cookie'],
    acceptedContent: headers['accept'],
    method, hostname, path, query, protocol, httpVersion
  })
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
