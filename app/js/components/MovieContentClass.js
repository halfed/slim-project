var React = require('react');

var MovieContentClass = React.createClass({
	
	render: function() {
		var movieContent = this.props.indMovieContent.map(function(result){
			return  <div key={'movieId_'+result.movie_id}>
						<div className="container-fluid-small">
							<div className="row no-gutters">
								<div className="col-md-8 movie-details">
									<h4>Free</h4>
									<p>
										{result.movie_description}
									</p>
								</div>
								<div className="col-md-3">
									<h5>Details</h5>
									<div className="rating-system">
										<p className="showcase">{result.movie_rating}</p><p className="highlight">HD</p><p className="highlight">CC</p><p className="highlight">DVD</p>
									</div>
									<div><p>{result.genre}</p></div>
								</div>
							</div>
						</div>
						<div className="row no-gutters">
							<div className="col-md-12 movie-sub-nav">
								<a href=""><b>Rent</b></a> <a href=""><b>Ways To Watch</b></a> <a href="#" className="trailer" onClick={this.props.onClick}><b>Trailer</b></a> <a href=""><b>Extras</b></a> <a href=""><b>More</b></a>
							</div>
						</div>
					</div>
		},this);
		return (<div className="col-md-7 col-sm-12 ind-movie-description">{movieContent}</div>);
	}
});

module.exports = MovieContentClass;