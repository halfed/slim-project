var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
import axios from 'axios';

var allMovies = [];

var MovieApp = React.createClass({
  getInitialState: function() {
    return {
      movies: allMovies
    }
  },
  componentDidMount: function () {
    axios.get('http://localhost/slim/scripts/ApiRoutes/AllMovies.php/allMovies')
    .then(function (response) {
        var allMovies = [];
        /*response.data.forEach(function(element) {
          allMovies.push(element);
        });*/
        console.log("all movies: ");
        console.log(allMovies);
        this.setState({element: element}, function(){
          console.log(this.state.element);
        }.bind(this));

    })
    .catch(function (error) {
        console.log(error);
    });
  },

	render: function() {
    console.log(this.state.movies);
		return <App movieListing={this.state.movies} />
	}
});

ReactDOM.render(<MovieApp />, document.getElementById('app'));