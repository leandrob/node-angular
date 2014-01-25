module.exports.init = function(api) {

	api.private.get('/admin/users', function(req, res) {
		res.send([ { name: 'Lean ' }, { name: 'Juan ' } ]);
	});
}