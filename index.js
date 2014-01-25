var app = require('./core');

var config = {
	info: {
		title: 'Node Angular Framework Showcase'
	},
	auth: {
		loginPage: 'full-url'
	},
	server: {
		port: 80
	},
	authzProvider: function(user, cb) { cb(true); },
	authProvider: function(req, res, next) { next(); },
	sessionProvider: null,
	errorHandler: null,
	middlewares: []

}

app.start(config);