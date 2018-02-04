app.factory('allMovies', ['$http', function($http) {
	return $http.get('/slim/scripts/ApiRoutes/AllMovies.php/allMovies')
	.success(function(data){
		return data;
	})
	.error(function(err) {
		return err;
	});
}]);
