var React = require('react');
var ReactDOM = require('react-dom');
var MovieTitle = require('./components/MovieTitleClass');
var ImageDisplay = require('./components/ImageDisplayClass');
var MovieContent = require('./components/MovieContentClass');
var VideoDisplay = require('./components/VideoDisplayClass');
var Breadcrumb = require('./components/BreadcrumbClass');

var IndMovieApp = React.createClass({
	getInitialState: function(){
		return {
			indMovie: [],
			movieDisplayContainer: ImageDisplay,
			showVideo: false
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
			movieDisplayContainer: VideoDisplay,
			showVideo: true
		});
	},

	handleDisplayImageClick: function(e) {
		e.preventDefault();
		this.setState({
			movieDisplayContainer: ImageDisplay,
			showVideo: false
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
		this.getIndMovie('/slim/scripts/ApiRoutes/CurrentMovie.php/movie/'+currentMovie);
	},

	componentDidUpdate: function() {
		if(this.state.showVideo) {
			jQuery("#trailer-container").get(0).scrollIntoView();
		}
	},

	render: function() {
		//BASED ON THE CONDITION, WE WILL DISPLAY THE BREADCRUMB OR THE MAIN CONTENT, DOING THIS WAY TO PREVENT HAVING TO HAVE ANOTHER PARENT COMPONENT
		if(this.props.displayBreadCrumb === "true") {
			return (
				<div>
					<Breadcrumb movieDisplayBreadcrumb={this.state.indMovie} />
				</div>
				);
		}
		else {
			return (
				<div>
					<a className="button back btn-default gen-button-default" href="/slim/build">Back</a>
					<MovieTitle movieTitleName={this.state.indMovie} />
					<this.state.movieDisplayContainer movieDisplayType={this.state.indMovie} onClick={this.handleDisplayImageClick}/>
					<MovieContent indMovieContent={this.state.indMovie} onClick={this.handleDisplayVideoClick} />
				</div>
				);
		}
	}
		
});

ReactDOM.render(<IndMovieApp displayBreadCrumb="true" />, document.getElementById('breadcrumb'));
ReactDOM.render(<IndMovieApp displayBreadCrumb="false"/>, document.getElementById('movieApp'));