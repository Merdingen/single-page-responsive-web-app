import React, {Component} from 'react';
import './GuestbookForm.css'
import '../../../../App.css'
import Button from "../../elements/Button";
import {validateForm} from "../../../validation";

class GuestbookForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			subject: '',
			message: '',
			error: {}
		};

		this.submitForm = this.submitForm.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	submitForm() {
		let payload = [
			{
				field: 'name',
				value: this.state.name,
				rule: 'required'
			},
			{
				field: 'subject',
				value: this.state.subject,
				rule: 'required'
			},
			{
				field: 'message',
				value: this.state.message,
				rule: 'required'
			}
		];

		let error = validateForm(payload);

		if (error.isFormValid) {
			let newEntry = {};

			newEntry.name = this.state.name;
			newEntry.subject = this.state.subject;
			newEntry.message = this.state.message;


			this.props.submit(newEntry);

			this.setState({error: {}})
		} else {
			this.setState({
				error
			})
		}
	}

	render() {

		const { error } = this.state;

		return (
				<div className='guestbook-form'>
					<div className='col-sm-12 form-input-container'>
						<input id='name' type='text' placeholder='Name' className='form-input' value={this.state.name}
							   onChange={(e) => this.onChange(e)}/>
						{error.name && <span style={{color: 'red'}}>{error.name.message}</span>}
					</div>

					<div className='col-sm-12 form-input-container'>
						<input id='subject' type='text' placeholder='Subject' className='form-input'
							   value={this.state.subject} onChange={(e) => this.onChange(e)}/>
						{error.subject && <span style={{color: 'red'}}>{error.subject.message}</span>}
					</div>

					<div className='col-sm-12 form-textarea-container'>
						<textarea id='message' placeholder='Message' className='form-textarea'
								  value={this.state.message} onChange={(e) => this.onChange(e)}/>
						{error.message && <span style={{color: 'red'}}>{error.message.message}</span>}
					</div>

					<div className='col-sm-12 form-submit-button-container'>
						<Button onClick={this.submitForm} text='SEND' type='submit-button-t1'/>
					</div>
				</div>
		)
	}
}

export default GuestbookForm;