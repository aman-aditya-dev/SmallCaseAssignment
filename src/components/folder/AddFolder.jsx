import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFolderOrFile } from '../../actions';
import { closeModal } from '../../actions/modal';
import FolderForm from './FolderForm';
import history from '../../history';

class AddFolder extends Component {
	constructor(props) {
		super(props);
		this.newPath = false;
	}
	onSubmit = (formValues) => {
		let formData = { ...formValues };
		formData['id'] = new Date().valueOf();
		formData['type'] = this.props.modal.isFileOrFolder;
		this.props.createFolderOrFile(formData, this.props.path);
		this.props.closeModal(false);
	};

	render() {
		return (
			<div>
				<FolderForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		modal: state.modalState,
		path: state.path,
		folders: state.folders
	};
};

export default connect(mapStateToProps, { createFolderOrFile, closeModal })(AddFolder);
