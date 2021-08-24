import { ActionTypes } from "./constants";

const defaultState = {
	login: [],
};

export default function logInReducer(state = defaultState, action) {
	switch (action.type) {
		case ActionTypes.SET_LOGIN:
			return { ...state, login: action.payload };
		default:
			return state;
	}
}
