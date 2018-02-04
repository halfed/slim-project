import React from "react";

export class OptionalMenu extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
	  	let name = e.target.text;
	    this.props.onMenuChange(name);
	}

	render() {
		return (
			<div className="btn-group">
			<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
		      RATING
		      <span className="caret"></span>
		    </button>
			<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
				<li onClick={this.handleChange} value="PG"><a role="menuitem" href="#/?Rating=PG">PG</a></li>
				<li onClick={this.handleChange}><a role="menuitem" href="#/?Rating=PG-13">PG-13</a></li>
				<li onClick={this.handleChange}><a role="menuitem" href="#/?Rating=G">G</a></li>
				<li onClick={this.handleChange} value="R"><a role="menuitem" href="#/?Rating=R">R</a></li>
			</ul>
			</div>
		);
	}
}