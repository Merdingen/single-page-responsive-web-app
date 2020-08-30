import React, {Component} from 'react';
import './MarketingGrid.css'
import Showcase from "../../common/showcase/Showcase";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {infoList} from "../../ShowcaseInfoContent";
import Button from "../../common/elements/Button";
import '../../common/elements/Elements.css';

class MarketingGrid extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div id='segment' className='marketing-grid triangle-center'>
					<div className='row marketing-container'>
						<div className='col-sm-12 marketing-grid-header'>
							<h2>SEGMENT</h2>
						</div>

						<div className='col-sm-12 col-md-4 marketing-cell'>
							<Showcase shape='hexagon' bgColor='#01b169' icon='laptop' subtitle='Marketing Slot'
									  description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem'>
								<div className='marketing-grid-child-container'>
									{infoList.filter((item) => {
										return item.section === 0
									})[0].list.map(iter => {
										return (
												<div className='child-wrapper'>
													<div className='marketing-grid-child'>
														<div className='icon-container'>
															<FontAwesomeIcon icon='check' color='#00af66'/>
														</div>

														<div className='title-container'>
															<h4>{iter.title}</h4>
														</div>
													</div>

													{!!iter.subtitle &&
													<div className='subtitle-container'>
														<h4>{iter.subtitle}</h4>
													</div>}
												</div>
										)
									})}

									<div className='info-button-container'>
										<Button text='BUTTON' type='marketing-info-button' style={{position: 'absolute', bottom: '60px', background: '#01b169'}}/>
									</div>
								</div>
							</Showcase>
						</div>

						<div className='col-sm-12 col-md-4 marketing-cell'>
							<Showcase shape='hexagon grey' bgColor='#464646' icon='laptop' subtitle='Marketing Slot'
									  description='Ut enim ad minima veniam, quis nostrum exercitationem'>
								<div className='marketing-grid-child-container'>
									{infoList.filter((item) => {
										return item.section === 1
									})[0].list.map(iter => {
										return (
												<div className='child-wrapper'>
													<div className='marketing-grid-child'>
														<div className='icon-container'>
															<FontAwesomeIcon icon='check' color='#00af66'/>
														</div>

														<div className='title-container'>
															<h4>{iter.title}</h4>
														</div>
													</div>

													{!!iter.subtitle &&
													<div className='subtitle-container'>
														<h4>{iter.subtitle}</h4>
													</div>}
												</div>
										)
									})}

									<div className='info-button-container'>
										<Button text='BUTTON' type='marketing-info-button' style={{position: 'absolute', bottom: '60px', background: '#464646', color: 'white'}}/>
									</div>
								</div>
							</Showcase>
						</div>

						<div className='col-sm-12 col-md-4 marketing-cell'>
							<Showcase shape='hexagon red' bgColor='#e84c3d' icon='laptop' subtitle='Marketing Slot'
									  description='Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur'>
								<div className='marketing-grid-child-container'>
									{infoList.filter((item) => {
										return item.section === 2
									})[0].list.map(iter => {
										return (
												<div className='child-wrapper'>
													<div className='marketing-grid-child'>
														<div className='icon-container'>
															<FontAwesomeIcon icon='check' color='#00af66'/>
														</div>

														<div className='title-container'>
															<h4>{iter.title}</h4>
														</div>
													</div>
													{!!iter.subtitle &&
													<div className='subtitle-container'>
														<h4>{iter.subtitle}</h4>
													</div>}
												</div>
										)
									})}

									<div className='info-button-container'>
										<Button text='BUTTON' type='marketing-info-button' style={{position: 'absolute', bottom: '60px', background: '#e84c3d'}}/>
									</div>
								</div>
							</Showcase>
						</div>
					</div>
				</div>
		)
	}
}

export default MarketingGrid;