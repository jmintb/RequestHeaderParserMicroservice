'use strict'

var express = require('express');
var app = express();
var requestHeaderParser = require('app/api/RequestHeaderParser.js');
var port = process.env.PORT || 8080;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

requestHeaderParser(app);

app.listen(port);


