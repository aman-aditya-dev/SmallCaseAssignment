import React, { Component } from 'react';
import { connect } from 'react-redux';

import { pathUpdate, setPath, navPathUpdate } from '../../actions';

class FolderNavBar extends Component {
	constructor(props) {
		super(props);

		this.navPathTree = [];
	}

	handleNav = (e, path) => {
		e.preventDefault();
		this.props.navPathUpdate(path.split('/'));
	};

	renderPath = () => {
		return this.props.folders.map((item, index) => {
			this.navPathTree.push(item.Path);
			if (this.navPathTree.indexOf(item.Path) !== -1) {
				return (
					<a
						key={index}
						className={item.Path === 'root' ? 'active item' : 'item'}
						style={{ margin: '0px', padding: '6%', color: '#808080' }}
						onClick={(e) => this.handleNav(e, item.Path)}
					>
						{item.Path.split('/').reverse().shift().toUpperCase()}
					</a>
				);
			}
		});
	};
	render() {
		return (
			<React.Fragment>
				<div
					className="ui secondary vertical menu"
					style={{ width: '100%', height: '100vh', background: '#f3f3f3' }}
				>
					{this.renderPath()}
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		path: state.path,
		folders: state.folders
	};
};

export default connect(mapStateToProps, {
	pathUpdate,
	setPath,
	navPathUpdate
})(FolderNavBar);
