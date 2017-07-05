// node packages
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");

// set port
var port = process.env.port || 3030;

// setup express
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// set static folder
app.use(express.static(__dirname + "/public"));



// setup server to listen
app.listen(port, function() {
	console.log('Server listening on PORT '+port);
});