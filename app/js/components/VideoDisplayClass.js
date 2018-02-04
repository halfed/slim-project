var React = require('react');

var VideoDisplayClass = React.createClass({
	render: function() {
		var movieVideo = this.props.movieDisplayType.map(function(result) {
			return <div id="trailer-container" key={'movieId_'+result.movie_id} className="trailer-container">
					  <button className="btn close-trailer-btn btn-sm" onClick={this.props.onClick}>close</button>
					  <iframe width="100%" height="250px" src={"https://www.youtube-nocookie.com/embed/"+result.movie_video_id+"?rel=0"} frameBorder="0" allowFullScreen></iframe>
				   		
				   </div>
		}.bind(this));
		return (<div className="col-md-5 col-sm-4 collapse-overide">{movieVideo}</div>); 
	}
});

module.exports = VideoDisplayClass;
