var React = require('react');
var ReactDOM = require('react-dom');
var MovieTitle = require('./components/MovieTitleClass');
var ImageDisplay = require('./components/ImageDisplayClass');
var MovieContent = require('./components/MovieContentClass');
var VideoDisplay = require('./components/VideoDisplayClass');

var IndMovieApp = React.createClass({
	getInitialState: function(){
		return {
			indMovie: [],
			movieDisplayContainer: ImageDisplay
		}
	},

	showMovieResult: function(response) {
		this.setState({
			indMovie: response
		});
	},

	handleDisplayVideoClick: function(e) {	
		e.preventDefault();
		this.setState({
			movieDisplayContainer: VideoDisplay
		});
	},

	handleDisplayImageClick: function(e) {
		e.preventDefault();
		this.setState({
			movieDisplayContainer: ImageDisplay
		});
		
	},

	getIndMovie: function(url) {
		$.ajax({
			type: "GET",
			dataType: "json",
			url: url,
			success: function(data) {
				this.showMovieResult(data);
			}.bind(this)
		});
	},

	componentDidMount: function() {
		this.getIndMovie('http://localhost/slim/scripts/ApiRoutes/CurrentMovie.php/movie/'+currentMovie);
	},

	render: function() {
		return (
				<div>
					<a className="button back btn-default gen-button-default" href="/slim/build">Back</a>
					<MovieTitle movieTitleName={this.state.indMovie} />
					<this.state.movieDisplayContainer movieDisplayType={this.state.indMovie} onClick={this.handleDisplayImageClick}/>
					<MovieContent indMovieContent={this.state.indMovie} onClick={this.handleDisplayVideoClick} />
				</div>
				);
	}
});

ReactDOM.render(<IndMovieApp />, document.getElementById('movieApp'));