app.factory('httpInterceptor', function ($q, $window) {
	return function (promise) {
		return promise.then(
			function (response) {
				$('#loading').hide();
				return response;
			}, 
			function (response) {
				$('#loading').hide();

				if (response.status == 500) {
					// TODO: Do something generic for 500 errors
				}
				else if (response.status == 403) {
					// TODO: Do something generic for 403 errors
				};

				return $q.reject(response);
		});
	};
});