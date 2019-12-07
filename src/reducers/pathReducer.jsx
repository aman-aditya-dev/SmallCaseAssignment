import { GET_PATH, SET_PATH, GET_NAV_PATH } from '../actions/types';

export default (state = [ 'root' ], action) => {
	switch (action.type) {
		case GET_PATH:
			return [ ...state, action.payload ];
		case GET_NAV_PATH:
			return (state = action.payload);
		case SET_PATH:
			return state.filter((value) => value !== action.payload);
		default:
			return state;
	}
};
