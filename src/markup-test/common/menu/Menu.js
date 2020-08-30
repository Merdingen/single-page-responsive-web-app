import React, {Component} from 'react';
import './Menu.css'

class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<header className="menu-header">
					<input className="menu-btn" type="checkbox" id="menu-btn"/>
					<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
					<ul className="menu">
						<li><a href="#home">HOME</a></li>
						<li><a href="#segment">SEGMENT</a></li>
						<li><a href="#guestbook">GUESTBOOK</a></li>
					</ul>
				</header>
		)
	}
}

export default Menu;