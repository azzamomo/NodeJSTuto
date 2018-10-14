var express = require('express');
var app = express();
var path = require('path');

console.log('Server listenning to port 3000');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen('3000');