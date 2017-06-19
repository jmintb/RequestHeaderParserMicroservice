'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/', function (req, res) {
  res.json(getSystemInfo(req));
});

app.listen(port);

function getSystemInfo(req) {
  return {
    ip: req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress,
    language: req.headers["accept-language"].split(',')[0],
    os:  req.headers['user-agent'].split('(')[1].split(')')[0]
  };
}
