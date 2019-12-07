import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div className="ui dimmer modals visible active" onClick={props.onDismiss}>
			<div
				className="ui standard modal visible active"
				style={{ width: '25%' }}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="header" style={{ textAlign: 'center' }}>
					{props.title}
				</div>
				<div className="actions" style={{ textAlign: 'center', background: '#fff' }}>
					{props.actions}
				</div>
				<div className="content">{props.content}</div>
			</div>
		</div>,
		document.querySelector('#root')
	);
};

export default Modal;
