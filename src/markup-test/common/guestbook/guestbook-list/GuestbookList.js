import React, {Component} from 'react';
import './GuestbookList.css'

class GuestbookList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div className='guestbook-list'>
					{this.props.content && this.props.content.map(entry => {
						return (
								<div id={entry.id} className='col-sm-12 guestbook-list-card'>
									<div className='guestbook-list-card-header'>

									</div>
									<p>{entry.message}</p>
								</div>
						)
					})}
				</div>
		)
	}
}

export default GuestbookList;