import React from "react";
import {Link} from "react-router";

export class Newest extends React.Component {
	render() {
		return (
			<div>
			{this.props.children}
			<h1>Newest</h1>
			</div>
		);
	}
}