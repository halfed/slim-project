var React = require('react');
var ReactDOM = require('react-dom');

var IndMovieApp = React.createClass({

	render: function() {
		return (<h1>Hello World</h1>);
	}
});

ReactDOM.render(<IndMovieApp />, document.getElementById('movieApp'));