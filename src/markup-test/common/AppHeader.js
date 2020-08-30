import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './AppHeader.css';
import Menu from "./menu/Menu";
import SocialMediaMenu from "./social/SocialMediaMenu";


class AppHeader extends Component {
	constructor(props) {
		super(props);
	}


	render() {

		const platforms = [
			{
				id: Math.random().toString(32),
				name: 'facebook',
				icon: 'facebook'
			},
			{
				id: Math.random().toString(32),
				name: 'twitter',
				icon: 'twitter'
			},
			{
				id: Math.random().toString(32),
				name: 'linkedin',
				icon: 'linkedin'
			},
			{
				id: Math.random().toString(32),
				name: 'google',
				icon: 'google'
			}
		];

		return (
				<div className="row app-header">
					<div className="col-sm-12 header-container">
						<div className='col-md-7 menu-container'>
							<Menu/>
						</div>

						<div className='col-md-5 social-media-container'>
							<SocialMediaMenu platforms={platforms}/>
						</div>
					</div>
				</div>
		);
	}
}

export default withRouter(AppHeader);