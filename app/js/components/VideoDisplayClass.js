var React = require('react');

var VideoDisplayClass = React.createClass({
	render: function() {
		var movieVideo = this.props.movieDisplayType.map(function(result) {
			return <div key={'movieId_'+result.movie_id}>
					  <button className="btn close-trailer-btn" onClick={this.props.onClick}>close</button>
					  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IEVE3KSKQ0o?rel=0" frameBorder="0" allowFullScreen></iframe>
				   </div>
		}.bind(this));
		return (<div className="col-md-5 col-sm-4 collapse-overide">{movieVideo}</div>); 
	}
});

module.exports = VideoDisplayClass;

//<iframe width="560" height="315" src="https://www.youtube.com/embed/d96cjJhvlMA" frameborder="0" allowfullscreen></iframe>
