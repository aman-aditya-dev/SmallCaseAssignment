import { CREATE_FOLDERORFOLDER, DELETE_FOLDERORFILE } from '../actions/types';
import { data, rootData } from '../components/folder/folderStructure';
const INITIAL_STATE = rootData;
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CREATE_FOLDERORFOLDER:
			let newPath = false;
			for (let i = 0; i < state.length; i++) {
				if (state[i].Path !== action.path) {
					newPath = true;
				} else {
					newPath = false;
					state[i].Content.push(action.payload);
					break;
				}
			}
			if (newPath) {
				state.push({ Path: action.path, Content: [ action.payload ] });
			}
			return [ ...state ];

		case DELETE_FOLDERORFILE:
			let filteredData, folderName;
			for (let i = 0; i < state.length; i++) {
				if (state[i].Path === action.path) {
					filteredData = state[i].Content.filter((item) => {
						if (item.id === action.payload) {
							folderName = item.name;
						}
						return item.id !== action.payload;
					});
					state[i].Content = filteredData;
					break;
				}
			}
			if (action.isFolder) {
				state = state.filter((item) => {
					return !item.Path.includes(`${action.path}/${folderName}`);
				});
			}
			return [ ...state ];
		default:
			return state;
	}
};
