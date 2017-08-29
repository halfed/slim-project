var React = require('react');

var MovieTitleClass = React.createClass({
	render: function() {
		return <h3>{this.props.movie_name}</h3>
	}
});


module.exports = MovieTitleClass;