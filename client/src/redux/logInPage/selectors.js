import { createSelector } from "reselect";

const LogInPageState = (state) => state.logInPage;

export const makeLogInPage = createSelector(
	LogInPageState,
	(logInPage) => logInPage.login
);
