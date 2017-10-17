var React = require('react');


var MyComponentClass = React.createClass({

	render: function() {
		var resultItems = this.props.movies.map(function(result) {
			return <div className="col-md-2 col-sm-2 ind-movie-container" key={'movieId_'+result.movie_id}>
						<a href={"movie/"+result.url_param} className="img-link">
							<img src={"../images/thumbs/"+result.movie_thumb} className="img-responsive" />
							<h3 className="bottom-movie-title">{result.movie_name} {result.movie_release_date} {result.movie_rating}</h3>
						</a>
					</div>
		});
		return (<div>{resultItems}</div>);
  	}
});

module.exports = MyComponentClass;