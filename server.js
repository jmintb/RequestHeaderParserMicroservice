var express = require('express');
var app = express();
var requestHeaderParser = require('./app/RequestHeaderParser.js');
var port = process.env.PORT || 8080;


requestHeaderParser(app);

app.listen(port);


