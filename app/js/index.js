//var React = require('react');
import React from "react";
//var ReactDOM = require('react-dom');
import ReactDOM from "react-dom";
//import {Route, HashRouter, IndexRoute, BrowserRouter as Router} from "react-router-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {Newest} from "./pages/Newest";
import {Genre} from "./pages/Genre";

var App = require('./components/App');

var MovieApp = React.createClass({
  getInitialState: function() {
    return {
      movies: [],
      url: '/slim/scripts/ApiRoutes/AllMovies.php/'+selectionType
    }
  },

  showResults: function(response) {
    this.setState({
      movies: response
    });
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
    this.getmovies(this.state.url);
  },
	render: function() {
    console.log(this.props);
		return (<div>
            {this.props.children}
            <App movies={this.state.movies}/>
            </div>
            );
	}
});

//ReactDOM.render(<MovieApp />, document.getElementById('app'));
//<IndexRoute component={FeaturedDropDown}/> In this instance we don't need an index route at this time, I think
ReactDOM.render(<Genre />, document.getElementById('tree'));
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MovieApp}>
      
      <Route path="/Newest" name="newest" component={Newest}/>
    </Route>
  </Router>, 
document.getElementById('app'));