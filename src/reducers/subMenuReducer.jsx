import { OPEN_SUBMENU, CLOSE_SUBMENU, GET_INFO } from '../actions/types';

const INITIAL_STATE = {
	isMenuOpen: false
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case OPEN_SUBMENU:
			return { ...state, isMenuOpen: action.payload };
		case CLOSE_SUBMENU:
			return { ...state, isMenuOpen: action.payload };
		case GET_INFO:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
