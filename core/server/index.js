var express = require('express');
var http = require('http');
var path = require('path');
var apiExtensions = require('./apiExtensions');
var moduleLoader = require('./moduleLoader');

var server = module.exports;

server.start = function (config) {
	var api = express();

	api.config = config;

	api.configure(function(){
		api.set('port', config.server.port);

		api.use(express.favicon());
		api.use(express.bodyParser());
		api.use(express.cookieParser('notasecret'));
		api.use(config.sessionProvider || express.session());
		
		api.use(config.authProvider);

		(config.middlewares || []).forEach(function(m) { api.use(m); });

		api.use(express.static(path.join(__dirname, '../../client-side')));

		// App Extensions
		apiExtensions(api);

		// Load Modules
		moduleLoader.loadModules(api);

		// Errors
		api.use(config.errorHandler || function(error, req, res, next) {
			var status = error.status || 500;
			var msg = error.message || 'Unknown error';

			var info = error.data || {};
			info.message = msg;

			res.json(status, info);
		});
	});

	console.log('> Starting webserver...'.green);

	http
	.createServer(api)
	.listen(api.get('port'), function() {
		console.log("+ Webserver started at port " + api.get('port'));
	});
}