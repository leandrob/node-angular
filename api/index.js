module.exports.init = function(api) {
	
	api.public.masterPage('/', 'home');

	api.private.get('/admin', function(req, res) {
		res.send('Admin!');
	});

	api.private.get('/user', function (req, res) { 
		res.json({
			name: 'Leandro'
		}); 
	});
}