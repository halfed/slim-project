var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

var MovieApp = React.createClass({
  getInitialState: function() {
    return {
      movies: []
    }
  },

  showResults: function(response) {
    this.setState({
      movies: response
    });
    console.log(response);
  },
  getmovies: function(URL) {
    $.ajax({
      type: "GET",
      dataType: 'json',
      url: URL,
      success: function(response) {
        this.showResults(response);
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.getmovies('http://localhost/slim/scripts/ApiRoutes/AllMovies.php/allMovies');
  },
	render: function() {
		return <App movies={this.state.movies}/>
	}
});

ReactDOM.render(<MovieApp />, document.getElementById('app'));