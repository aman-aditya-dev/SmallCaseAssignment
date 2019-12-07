import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openSubMenu, closeSubMenu, getInfo } from '../../../actions/submenu';
import { pathUpdate } from '../../../actions';
import SubMenu from '../SubMenu';
import '../../../styles.css';

class Container extends Component {
	constructor(props) {
		super(props);
		this.itemId = '';
	}

	handleMenu = (e, info) => {
		e.preventDefault();
		this.itemId = info.id;
		this.props.openSubMenu(true);
		this.props.getInfo(info);
	};
	openFolder = (e, folderData) => {
		e.preventDefault();
		this.props.pathUpdate(folderData.name);
	};
	render() {
		return (
			<React.Fragment>
				<div key={this.props.itemObj.key} className="column">
					<div
						className="file"
						onContextMenu={(e) => this.handleMenu(e, this.props.itemObj)}
						onDoubleClick={
							this.props.type === 'folder' ? (e) => this.openFolder(e, this.props.itemObj) : null
						}
					>
						{this.props.type === 'file' ? <i className="file icon" /> : <i className="folder icon" />}
					</div>
					<span style={{ paddingLeft: '20%' }}>{this.props.itemObj.name}</span>
					{this.props.subMenu.isMenuOpen && this.props.subMenu.id === this.itemId ? (
						<SubMenu info={this.props.itemObj} />
					) : null}
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		subMenu: state.subMenu
	};
};

export default connect(mapStateToProps, { openSubMenu, getInfo, pathUpdate })(Container);
