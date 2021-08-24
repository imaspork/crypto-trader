import React from "react";
import { useEffect } from "react";
import { Button, Center } from "@chakra-ui/react";
import { createSelector } from "reselect";
import { makeSelectCoins } from "./selectors";
import { useSelector, useDispatch } from "react-redux";
import { setCoins } from "./actions";
import axios from "axios";

const stateSelector = createSelector(makeSelectCoins, (coins) => ({ coins }));

const actionDispatch = (dispatch) => ({
	setCoins: (coins) => dispatch(setCoins(coins)),
});

export const GetCoin = (props) => {
	const { coins } = useSelector(stateSelector);
	const { setCoins } = actionDispatch(useDispatch());

	const setUserCoins = () => {
		setCoins({ user: 10000 });
	};

	console.log(coins);

	return (
		<Center width="100vw" height="100vh">
			<Button onClick={setUserCoins}>Get $10,000 USD for coins</Button>
		</Center>
	);
};

export default GetCoin;
