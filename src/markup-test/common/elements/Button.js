import React, { Component } from 'react';
import './Elements.css'

class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<button onClick={() => this.props.onClick && this.props.onClick()} className={this.props.type} style={this.props.style}>
					{this.props.text}
				</button>
		)
	}
}

export default Button;