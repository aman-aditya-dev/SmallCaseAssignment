import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class FolderForm extends Component {
	renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui error" style={{ color: '#912d2b' }}>
					<div className="header">{error}</div>
				</div>
			);
		}
	};

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<input id={label} {...input} placeholder={label} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field name="name" label="Name" component={this.renderInput} />
				<Field name="creator" label="Creator" component={this.renderInput} />
				<Field name="size" label="Size" component={this.renderInput} />
				<Field name="date" label="Date" component={this.renderInput} />
				<button className="ui button primary">Create</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.name) {
		errors.name = 'Name can not be empty';
	}

	if (!formValues.creator) {
		errors.creator = 'creator can not be empty';
	}

	if (!formValues.size) {
		errors.size = 'Please provide file size';
	}

	if (!formValues.date) {
		errors.date = 'Please enter date';
	}

	return errors;
};

export default reduxForm({
	form: 'FolderForm',
	validate: validate
})(FolderForm);
