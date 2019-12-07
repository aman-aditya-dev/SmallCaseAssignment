import { OPEN_SUBMENU, CLOSE_SUBMENU, GET_INFO } from './types';
export const openSubMenu = (flag) => {
	return { type: OPEN_SUBMENU, payload: flag };
};

export const closeSubMenu = (flag) => {
	return { type: CLOSE_SUBMENU, payload: flag };
};

export const getInfo = (obj) => {
	return { type: GET_INFO, payload: obj };
};
