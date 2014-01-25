function configureRoutes($routeProvider) {
	$routeProvider
	.when('/', { controller: 'indexController', templateUrl: '/home/views/home.html' })

	.otherwise({ redirectTo: '/' });
}