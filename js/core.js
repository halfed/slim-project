"use strict";
(function($) {
	//JAVASCRIPT AJAX TEST TO KEEP UP WITH SYNTAX
	/*$.ajax({
		url: "http://localhost/slim/scripts/ApiRoutes/AllMovies.php/allMovies",
		type: "GET",
		dataType: "json",
		cache: false,
		success: function(data) {
			var $holderClass = $(".holder");
			$.each(data, function(index, element) {
				$holderClass.append(element.movie_release_date).fadeIn("slow");
			});
		},
		error: function(jqXHR) {
			console.log(jqXHR.statusText);
		},
		complete: function(e) {
			//console.log(e);
		}
	});*/

	$(function () {
        $.scrollUp({
            animation: 'fade',
            activeOverlay: '#00FFFF',
            scrollImg: {
                active: true,
                type: 'background',
                src: 'img/top.png'
            }
        });
    });
	
})(jQuery);
