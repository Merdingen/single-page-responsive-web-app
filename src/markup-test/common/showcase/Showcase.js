import React, {Component} from 'react';
import './Showcase.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Button from "../elements/Button";

class Showcase extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div className='showcase-container'>
					<div className='showcase-thumbnail'>
						<div className={'thumbnail-image-container' + this.props.shape && this.props.shape}>
							<FontAwesomeIcon icon={this.props.icon} color='#ffffff'
											 style={{position: 'absolute', top: '25px', left: '60px'}} size='4x'/>
						</div>

						<div className='showcase-subtitle'>
							<p>
								{this.props.subtitle}
							</p>
						</div>

						<div className='showcase-description'>
							<p>
								{this.props.description}
							</p>
						</div>
					</div>

					<div className='showcase-info'>
						<div className='showcase-info-container' style={{borderTopColor: this.props.bgColor}}>
							{this.props.children}
						</div>
					</div>
				</div>
		)
	}
}

export default Showcase;