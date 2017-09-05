'use strict';

// DONE: Initialize your project using NPM to create and populate a package.json file

// DONE: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');

const conString = process.env.DATABASE_URL || 'postgres://localhost:5432/';

// There is also a package here called body-parser, which is required in for use in a new route.
// Be sure to install that and save it as a dependency after you create your package.json.
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// DONE: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

// REVIEW: This is a new proxy method which acts as a 'middle man' (middleware) for our request.
function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

// REVIEW: This is a new route that will utilize our middle man proxy.
app.get('/github/*', proxyGitHub);

app.get('/*', (request, response) => response.sendFile('index.html', {root: './public'}));
app.listen(PORT, function() {
  // DONE: Log to the console a message that lets you know which port your server has started on
  console.log('Our app is listening on port ' + PORT);
});
