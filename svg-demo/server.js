var http = require('http');
var fs = require('fs');
var ecstatic = require('ecstatic');

var staticd = ecstatic({
    root: __dirname + '/static',
    autoIndex: true
});

var server = http.createServer(function(req, res) {
    return staticd(req, res);
});

server.listen(process.env.PORT || 5000);