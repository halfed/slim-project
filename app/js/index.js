//var React = require('react');
import React from "react";
//var ReactDOM = require('react-dom');
import ReactDOM from "react-dom";
//import {Route, HashRouter, IndexRoute, BrowserRouter as Router} from "react-router-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {OptionalChoices} from "./pages/OptionalChoices";
import {MainDropDown} from "./pages/MainDropDown";

var App = require('./components/App');

var MovieApp = React.createClass({
  getInitialState: function() {
    return {
      movies: [],
      url: '/slim/scripts/ApiRoutes/AllMovies.php/'+selectionType,
      mainDropDown: true
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
  onOptionalChange: function(value) {
    this.getmovies(this.state.url+"/"+value);
  },
  componentWillMount: function() {
    console.log("componentWill mount");
  },
  componentDidMount: function() {
    if(this.props.location.query.Rating) {
      this.getmovies(this.state.url+"/"+this.props.location.query.Rating);
    }
    else {
      this.getmovies(this.state.url);
    }
  },
	render: function() {       
		return (<div>
            {React.cloneElement(this.props.children, {onOptionalMenuChange: this.onOptionalChange})}
            <App movies={this.state.movies}/>
            </div>
            );
	}
});

//ReactDOM.render(<MovieApp />, document.getElementById('app'));
ReactDOM.render(<MainDropDown />, document.getElementById('main-drop-down'));
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MovieApp}>
      <IndexRoute component={OptionalChoices} />
    </Route>
  </Router>, 
document.getElementById('app'));