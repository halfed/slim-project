var React = require('react');

var VideoDisplayClass = React.createClass({
	render: function() {
		var movieVideo = this.props.movieDisplayType.map(function(result) {
			return <div key={'movieId_'+result.movie_id} className="trailer-container">
					  <button className="btn close-trailer-btn" onClick={this.props.onClick}>close</button>
					  <iframe width="100%" height="auto" src={"https://www.youtube-nocookie.com/embed/"+result.movie_video_id+"?rel=0"} frameBorder="0" allowFullScreen></iframe>
				   		
				   </div>
		}.bind(this));
		return (<div className="col-md-5 col-sm-4 collapse-overide">{movieVideo}</div>); 
	}
});

module.exports = VideoDisplayClass;
