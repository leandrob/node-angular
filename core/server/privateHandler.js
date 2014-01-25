module.exports = function (api, method, path, handler) {

	api[method](path, function (req, res, next) {
		req.user = req.user || req.session.user;

			// Not Authenticated
			if (!req.user) {
				// If ajax.
				if (req.xhr) {
					res.json(403, { message: 'You don\'t have a session opened'});
					return;
				}

				res.redirect(api.config.auth.loginPage);			
			};


			// Authenticated
			if (config.authzProvider) {

				config.authzProvider(req.user, function(authorized) {
						if (authorized) {
							handler(req, res, next);
							return;
						}

						// If ajax.
						if (req.xhr) {
							res.json(403, { message: 'You don\'t have permission to perform this action.'});
							return;
						}

						res.redirect(config.auth.loginPage)						
					});

				return;
			};

			handler(req, res, next);
		});
}

