var React = require('react');

var ImageDisplayClass = React.createClass({
	render: function() {
		var movieImage = this.props.movieDisplayType.map(function(result) {
			return <div key={'movieId_'+result.movie_id}>
						<img src={'../../images/main/' + result.movie_img_lg} />
				   </div>
		});
		return (<div className="col-md-5 col-sm-4 collapse-overide">{movieImage}</div>);
	}
});

module.exports = ImageDisplayClass;