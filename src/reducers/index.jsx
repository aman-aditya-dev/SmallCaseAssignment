import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import folderReducer from './folderReducer';
import modalReducer from './modalReducer';
import pathReducer from './pathReducer';
import subMenuReducer from './subMenuReducer';

export default combineReducers({
	folders: folderReducer,
	form: formReducer,
	modalState: modalReducer,
	path: pathReducer,
	subMenu: subMenuReducer
});
