import React from 'react';
import {Link} from 'react-router';

export class MainDropDown extends React.Component {
	render() {
		return (
			<ul className="nav navbar-nav navbar-left">
	          <li className="dropdown">
	            <a href="#/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">SORT BY <span className="caret"></span></a>
	            <ul className="dropdown-menu">
	              <li><a href="Newest">New Release</a></li>
	              <li><a href="A-Z">A-Z</a></li>
	            </ul>
	          </li>
	          <li className="dropdown">
	            <a href="/genre" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">GENRE <span className="caret"></span></a>
	            <ul className="dropdown-menu">
	              <div className="drop-down-half">
	                <li><a href="Action">Action</a></li>
	                <li><a href="Adventure">Adventure</a></li>
	                <li><a href="Animated">Animated</a></li>
	                <li><a href="Comedy">Comedy</a></li>
	                <li><a href="Crime">Crime</a></li>
	                <li><a href="Documentary">Documentary</a></li>
	                <li><a href="Drama">Drama</a></li>
	              </div>
	              <li role="separator" className="vertical-separator"></li>
	              <div className="drop-down-half">
	                <li><a href="Family">Family</a></li>
	                <li><a href="Fantasy">Fantasy</a></li>
	                <li><a href="Horror">Horror</a></li>
	                <li><a href="Kids">Kids</a></li>
	                <li><a href="Romance">Romance</a></li>
	                <li><a href="Sci-Fi">Sci-Fi</a></li>
	                <li><a href="Thriller & Suspense">Thriller & Suspense</a></li>
	              </div>
	            </ul>
	          </li>
	        </ul>
		);
	}
}