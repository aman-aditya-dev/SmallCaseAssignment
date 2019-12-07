import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openSubMenu } from '../../actions/submenu';
import { openInfoModal } from '../../actions/modal';
import { deleteFolderOrFile, pathUpdate } from '../../actions';
import Modal from '../Modal';

class SubMenu extends Component {
	constructor(props) {
		super(props);
	}
	handleOpen = () => {
		let selectedItem = this.props.subMenu;
		selectedItem.type === 'file' ? this.props.openInfoModal(true) : this.props.pathUpdate(selectedItem.name);
	};

	handleInfo = () => {
		this.props.openInfoModal(true);
	};
	handleDismiss = () => {
		this.props.openInfoModal(false);
		this.props.openSubMenu(false);
	};

	handleDelete = () => {
		this.props.deleteFolderOrFile(
			this.props.subMenu.id,
			this.props.path.join('/'),
			this.props.subMenu.type === 'folder'
		);
		this.props.openSubMenu(false);
	};

	renderContent = () => {
		return (
			<div className="ui list" style={{ textAlign: 'center' }}>
				<div className="item">
					<b>Name:</b> {this.props.subMenu.name}
				</div>
				<div className="item">
					<b>Size:</b> {this.props.subMenu.size}
				</div>
				<div className="item">
					<b>Creator Name:</b> {this.props.subMenu.creator}
				</div>
				<div className="item">
					<b>Created Date:</b> {this.props.subMenu.date}
				</div>
			</div>
		);
	};

	renderInfoModal = () => {
		return <Modal title="File Info" content={this.renderContent()} onDismiss={this.handleDismiss} />;
	};

	render() {
		return (
			<React.Fragment>
				<div className="ui vertical menu" style={{ padding: '0px' }}>
					<a className="active teal item" onClick={this.handleOpen}>
						Open
					</a>
					<a className="item" onClick={this.handleInfo}>
						Get Info
					</a>
					<a className="item" onClick={this.handleDelete}>
						Delete
					</a>
				</div>
				{this.props.modal.isInfoOpen ? this.renderInfoModal() : null}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		subMenu: state.subMenu,
		modal: state.modalState,
		path: state.path
	};
};

export default connect(mapStateToProps, {
	openSubMenu,
	openInfoModal,
	deleteFolderOrFile,
	pathUpdate
})(SubMenu);
