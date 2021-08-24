import { ActionTypes } from "./constants";
export const setLogIn = (login) => ({
	type: ActionTypes.SET_LOGIN,
	payload: login,
});
