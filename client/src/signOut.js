import React from "react";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { createSelector } from "reselect";
import { makeLogInPage } from "./redux/logInPage/selectors";
import { setLogIn } from "./redux/logInPage/actions";
import { useSelector, useDispatch } from "react-redux";

const stateSelector = createSelector(makeLogInPage, (login) => ({ login }));

const actionDispatch = (dispatch) => ({
	setLogIn: (login) => dispatch(setLogIn(login)),
});

let logOutFunction = () => {
	setLogIn({});
	localStorage.clear();
};

const SignOut = (props) => {
	let history = useHistory();

	const { login } = useSelector(stateSelector);
	const { setLogIn } = actionDispatch(useDispatch());
	return (
		<Button
			borderRadius="5px"
			bg="secondary"
			type="submit"
			onClick={() => logOutFunction()}
		>
			Sign Out
		</Button>
	);
};

export default SignOut;
