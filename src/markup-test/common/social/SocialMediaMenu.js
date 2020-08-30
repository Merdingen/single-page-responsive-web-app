import React, {Component} from 'react';
import './SocialMediaMenu.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SocialMediaMenu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div className='social-hexagon-container'>
					{this.props.platforms.map(platform => {
						return (
								<div id={platform.id} className='social-hexagon' style={{margin: '0 10px'}}>
									<div className='social-icon-container'>
										<FontAwesomeIcon icon={['fab', platform.icon]} color='#2e2e2e'
														 style={{position: 'absolute', top: '6px', left: '6px'}}/>
									</div>
								</div>
						)
					})}
				</div>
		)
	}
}

export default SocialMediaMenu;