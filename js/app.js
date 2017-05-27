var app = angular.module('MovieApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');

	$routeProvider
	.when('/', {
		controller: 'MovieController',
		templateUrl: "/slim/js/views/movies.html"
	})
	.when('/movie/:id/:movie_name', {
		name: 'movie_path',
		controller: 'IndMovieController',
		templateUrl: "/slim/js/views/indMovie.html"
	})
	.otherwise({
		redirectTo: '/'
	});

	//$locationProvider.html5Mode({enabled: false, requireBase: false, rewriteLinks: true});
	//console.log($locationProvider.html5Mode());
});