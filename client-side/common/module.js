var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
	
	// Routes
	configureRoutes($routeProvider);

	// Interceptors
	$httpProvider.responseInterceptors.push('httpInterceptor');

	$httpProvider.defaults.transformRequest.push(function (data, headersGetter) {
		$('#loading').show();
		return data;
	});
});