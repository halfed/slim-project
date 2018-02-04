app.controller('IndMovieController', ['$scope', 'allMovies', '$routeParams', '$location', function($scope, allMovies, $routeParams, $location) {
	allMovies.success(function(data) {
		$scope.movie = data[$routeParams.id];
		//$location.path('/slim/');

	});
	$scope.toDisplay = 'image';

	$scope.backToImage = function() {
		$scope.toDisplay = 'image';
	}
}]);