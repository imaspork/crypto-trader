import { ActionTypes } from "./constants";
export const setCoins = (coins) => ({
	type: ActionTypes.SET_COINS,
	payload: coins,
});
