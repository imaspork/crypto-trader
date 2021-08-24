import { createSelector } from "reselect";

const coinPageState = (state) => state.coinPage;

export const makeSelectCoins = createSelector(
	coinPageState,
	(coinPage) => coinPage.coins
);
