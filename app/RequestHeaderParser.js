module.exports = function getSystemInfo(app) {
    app.get('/whoami', function (req, res) {
    res.json(getSystemInfo(req));
});

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

}