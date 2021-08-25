import { ActionTypes } from "./constants";

const defaultState = {
	coins: [],
};

export default function coinReducer(state = defaultState, action) {
	switch (action.type) {
		case ActionTypes.SET_COINS:
			return { ...state, coins: action.payload };
		default:
			return state;
	}
}
