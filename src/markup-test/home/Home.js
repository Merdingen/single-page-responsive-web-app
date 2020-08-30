import React, {Component} from 'react';
import HeroImage from "../components/hero-image/HeroImage";
import MarketingGrid from "../components/marketing-grid/MarketingGrid";
import GuestbookGrid from "../components/guestbook-grid/GuestbookGrid";

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		const heroImageContent = {
			title: 'Pragmanila Solutions Markup Test',
			heading: 'There are many variations of passages of Lorem Ipsum available',
			description: 'Latin words, combined with a handful of model sentence structures, to generate Lorem ' +
					'Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, ' +
					'injected humour, or non-characteristic words etc.'
		};

		return (
				<div id='home-content' className='col-sm-12'>
					<HeroImage content={heroImageContent}/>

					<MarketingGrid/>

					<GuestbookGrid/>
				</div>
		)
	}
}

export default Home;