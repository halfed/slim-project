var React = require('react');

var MovieContentClass = React.createClass({
	
	render: function() {
		var movieContent = this.props.indMovieContent.map(function(result){
			return  <div key={'movieId_'+result.movie_id}>
						<div className="row">
							<div className="col-md-9">
								<h4>Free</h4>
								<p>
									{result.movie_description}
								</p>
							</div>
							<div className="col-md-3 movie-details">
								<h5>Details</h5>
								<div className="rating-system">
									<p className="showcase">{result.movie_rating}</p><p className="highlight">HD</p><p className="highlight">CC</p><p className="highlight">DVD</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 movie-sub-nav">
								<a href="">Rent</a> <a href="">Ways To Watch</a> <a href="#" onClick={this.props.onClick}>Trailer</a> <a href="">Extras</a> <a href="">More</a>
							</div>
						</div>
					</div>
		},this);
		return (<div className="col-md-7 ind-movie-description">{movieContent}</div>);
	}
});

module.exports = MovieContentClass;