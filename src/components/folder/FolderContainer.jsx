import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FolderNavBar from './FolderNavBar';
import AddFolder from '../folder/AddFolder';
import Modal from '../../components/Modal';
import SubMenu from './SubMenu';
import Container from './folderItems/Container';
import { openModal, closeModal, toogleFileOrFolder } from '../../actions/modal';
import { openSubMenu, closeSubMenu, getInfo } from '../../actions/submenu';
import { pathUpdate, setPath } from '../../actions';
import history from '../../history';
import '../../styles.css';

class FolderContainer extends Component {
	constructor(props) {
		super(props);
	}

	handleAdd = () => {
		this.props.openModal(true);
	};

	handleDismiss = () => {
		this.props.closeModal(false);
	};

	handleFileOrFolder = (type) => {
		this.props.toogleFileOrFolder(type);
	};

	handleNavBack = (e, path) => {
		e.preventDefault();
		this.props.setPath(path);
	};

	renderModal = () => {
		return (
			<Modal
				title="Create New"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={this.handleDismiss}
			/>
		);
	};

	renderContent = () => {
		return <AddFolder />;
	};

	renderActions = () => {
		return (
			<React.Fragment>
				<div className="ui buttons">
					<button
						className={
							this.props.modal.isFileOrFolder === 'file' ? 'ui button primary active' : 'ui button'
						}
						onClick={() => this.handleFileOrFolder('file')}
					>
						File
					</button>
					<button
						className={
							this.props.modal.isFileOrFolder === 'folder' ? 'ui button primary active' : 'ui button'
						}
						onClick={() => this.handleFileOrFolder('folder')}
					>
						Folder
					</button>
				</div>
			</React.Fragment>
		);
	};

	renderFolderList = () => {
		return this.props.folders.map((item) => {
			if (item.Path === this.props.path.join('/')) {
				return item.Content.map((el, index) => {
					return el.type === 'folder' ? (
						<Container itemObj={el} key={index} type="folder" />
					) : (
						<Container itemObj={el} key={index} type="file" />
					);
				});
			}
		});
	};

	render() {
		let currentPagePath = this.props.path;
		return (
			<div className="ui grid">
				<div className="three wide column">
					<FolderNavBar />
				</div>
				<div className="thirteen wide column">
					<div className="ui grid">
						<div className="one wide column">
							<div
								style={{
									fontSize: '27px',
									padding: '29%',
									cursor: currentPagePath.length > 1 ? 'pointer' : 'default'
								}}
								onClick={
									currentPagePath.length > 1 ? (
										(e) => this.handleNavBack(e, currentPagePath.pop())
									) : null
								}
							>
								<i className="arrow circle up icon" />
							</div>
						</div>
						<div className="ten wide column">
							<div className="ui breadcrumb" style={{ fontSize: '20px', padding: '1.5%' }}>
								{this.props.path.map((item, index) => {
									return (
										<React.Fragment key={index}>
											<a className="section">{item}</a>
											<div className="divider"> / </div>
										</React.Fragment>
									);
								})}
							</div>
						</div>
						<div className="sixteen wide column">
							<div className="ui doubling five column grid">
								{this.renderFolderList()}

								<div className="column" onClick={this.handleAdd}>
									<div className="addBtn">
										<i className="plus icon" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{this.props.modal.isOpen ? this.renderModal() : null}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		modal: state.modalState,
		folders: state.folders,
		path: state.path,
		folderContent: state.folderContent,
		subMenu: state.subMenu
	};
};

export default connect(mapStateToProps, {
	openModal,
	closeModal,
	toogleFileOrFolder,
	openSubMenu,
	closeSubMenu,
	getInfo,
	pathUpdate,
	setPath
})(FolderContainer);
