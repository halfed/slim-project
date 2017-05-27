"use strict";
(function($) {
	$.ajax({
		url: "http://localhost/slim/scripts/ApiRoutes/AllMovies.php/allMovies",
		type: "GET",
		dataType: "json",
		cache: false,
		success: function(data) {

			$.each(data, function(index, element) {
				$(".holder").append(element.movie_release_date).fadeIn("slow");
			});
		},
		error: function(jqXHR) {
			console.log(jqXHR.statusText);
		},
		complete: function(e) {
			//console.log(e);
		}
	});
})(jQuery);
