import React from "react";
import {Link} from "react-router";

export class Genre extends React.Component {
	render() {
		return (
			<div>
			
			<h1>Genre</h1>
			<p>help</p>
			{this.props.children}
			</div>
		);
	}
}