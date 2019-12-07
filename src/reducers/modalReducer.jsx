import { OPEN_MODAL, CLOSE_MODAL, TOOGLE_FILE_OR_FOLDER, OPEN_INFO_MODAL } from '../actions/types';

const INITIAL_STATE = {
	isOpen: false,
	isInfoOpen: false,
	isFileOrFolder: 'folder'
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return { ...state, isOpen: action.payload };
		case OPEN_INFO_MODAL:
			return { ...state, isInfoOpen: action.payload };
		case CLOSE_MODAL:
			return { ...state, isOpen: action.payload };
		case TOOGLE_FILE_OR_FOLDER:
			return { ...state, isFileOrFolder: action.payload };
		default:
			return state;
	}
};
