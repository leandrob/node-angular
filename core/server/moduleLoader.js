var fs = require('fs');

module.exports.loadModules = function(api) {

	console.log('> Loading modules...'.green)
	
	console.log('+ Loading index.js');
	require('../../api/index.js').init(api);

	var modules = fs.readdirSync('./api')
	.filter(function (e) { return e.indexOf('.') == -1 && e.indexOf("api.") == -1; });

	modules.forEach(function(e) {
		console.log('+ Loading ' + e + '.');
		require('../../api/' + e).init(api);
	});
}