import React, {Component} from 'react';
import './HeroImage.css'
import Button from "../../common/elements/Button";

class HeroImage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div id='home' className='row hero-image'>
					<div className='col-sm-12 hero-image-container'>
						<div className='main-logo-container'>
							<img className='main-logo' src='logo.png'/>
						</div>

						<div className='hero-image-content'>
							<div className='hero-image-title'>
								<h4>{this.props.content.title}</h4>
							</div>

							<div className='hero-image-heading'>
								<h2>{this.props.content.heading}</h2>
							</div>

							<div className='hero-image-description'>
								<p>{this.props.content.description}</p>
							</div>
						</div>

						<div className='hero-image-button-container'>
							<Button text='LEARN MORE' type='submit-button-t1' style={{color: 'white'}}/>
						</div>
					</div>
				</div>
		)
	}
}

export default HeroImage;