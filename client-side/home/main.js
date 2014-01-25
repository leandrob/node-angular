app.controller('mainController', function ($rootScope, $http) {

	console.log('main');

	setTimeout(function() { 
		$("#app-loader").hide();
	}, 
	2000);

});