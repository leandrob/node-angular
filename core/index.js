require('./extensions/arrayExtensions');
require('./extensions/stringExtensions');
require('colors');
require('simple-errors');

var server = require('./server');

var app = module.exports;

app.start = function (config) {
	server.start(config);
}