var React = require('react');
//var ReactDOM = require('react-dom');

var Breadcrumb = React.createClass({
	render: function() {
		var movieBreadCrumb = this.props.movieDisplayBreadcrumb.map(function(result) {
			return <ol className="breadcrumb">
					<li><a href="/slim/build">Home</a></li>
				    <li>Movie</li>
				    <li className="active">{result.movie_name}</li>
				   </ol>;
		}.bind(this));
		return (<div>{movieBreadCrumb}</div>);
	}
});

module.exports = Breadcrumb;

