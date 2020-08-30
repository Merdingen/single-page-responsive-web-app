import React, { Component } from 'react';
import './GuestbookGrid.css'
import GuestbookForm from "../../common/guestbook/guestbook-form/GuestbookForm";
import GuestbookList from "../../common/guestbook/guestbook-list/GuestbookList";
import { entries } from '../../GuestbookListContent'

class GuestbookGrid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			entries: []
		};

		this.onSubmitForm = this.onSubmitForm.bind(this);
	}

	componentDidMount() {
		this.setState({
			entries
		})
	}

	onSubmitForm(data) {
		let { entries } = this.state;

		let newEntry = {};
		newEntry.id = Math.random().toString(32);
		newEntry.name = data.name;
		newEntry.subject = data.subject;
		newEntry.message = data.message;
		// newEntry.date = data.date;
		// newEntry.time = data.time;

		entries.push(newEntry);

		this.setState({
			entries
		})
	}

	render() {

		const { entries } = this.state;

		return (
				<div id='guestbook' className='guestbook-grid row'>

					<div className='col-sm-12 guestbook-grid-header'>
						<h2>GUESTBOOK</h2>
					</div>

					<div className='col-sm-12 col-md-5 guestbook-form-container'>
						<GuestbookForm submit={this.onSubmitForm}/>
					</div>

					<div className='col-sm-12 col-md-7 guestbook-list-container'>
						<GuestbookList content={entries}/>
					</div>
				</div>
		)
	}
}

export default GuestbookGrid;