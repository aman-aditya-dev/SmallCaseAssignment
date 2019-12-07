import { CREATE_FOLDERORFOLDER, DELETE_FOLDERORFILE, GET_PATH, GET_NAV_PATH, SET_PATH } from './types';
export const createFolderOrFile = (formValues, path) => {
	return {
		type: CREATE_FOLDERORFOLDER,
		payload: formValues,
		path: path.join('/')
	};
};

export const deleteFolderOrFile = (id, path, type) => {
	return { type: DELETE_FOLDERORFILE, payload: id, path: path, isFolder: type };
};

export const pathUpdate = (path) => {
	return { type: GET_PATH, payload: path };
};

export const navPathUpdate = (value) => {
	return { type: GET_NAV_PATH, payload: value };
};

export const setPath = (path) => {
	return { type: SET_PATH, payload: path };
};
