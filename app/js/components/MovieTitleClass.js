var React = require('react');

var MovieTitleClass = React.createClass({
	render: function() {
		var titleName = this.props.movieTitleName.map(function(result) {
			return result.movie_name
		});
		return <h2>{titleName}</h2>;
	}
});


module.exports = MovieTitleClass;