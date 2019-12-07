import { OPEN_MODAL, CLOSE_MODAL, TOOGLE_FILE_OR_FOLDER, OPEN_INFO_MODAL } from './types';
export const openModal = (flag) => {
	return { type: OPEN_MODAL, payload: flag };
};

export const closeModal = (flag) => {
	return { type: CLOSE_MODAL, payload: flag };
};

export const openInfoModal = (flag) => {
	return { type: OPEN_INFO_MODAL, payload: flag };
};

export const toogleFileOrFolder = (flag) => {
	return { type: TOOGLE_FILE_OR_FOLDER, payload: flag };
};
