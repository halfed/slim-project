import React from "react";
import {Link} from "react-router";
import {OptionalMenu} from "./OptionalMenu";


export class OptionalChoices extends React.Component {
	constructor(props) {
	    super(props);
	    this.handleMenuChange = this.handleMenuChange.bind(this);
	}

	handleMenuChange(name) {
		this.props.onOptionalMenuChange(name);
	}

	render() {
		return (
			<div className="row">
				<div className="col-lg-12 rating-container">
					<div className="rating-menu-container left">
						{showMenu ? <OptionalMenu onMenuChange={this.handleMenuChange}/> : ""}
					</div>
					<div className="rating-symbol left">
						<h2>{this.props.location.query.Rating}</h2>
					</div>
				</div>
			</div>
		);
	}
}
