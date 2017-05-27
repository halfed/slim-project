app.controller('MovieController', ['$scope', 'allMovies', '$location', function($scope, allMovies, $location) {
	allMovies.success(function(data) {
		$scope.movies = data;
	});
}]);