import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import coinPage from "./redux/coinPage/reducers";
import logInPage from "./redux/logInPage/reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({ coinPage, logInPage });

const initialState = {};

const middleware = [thunk];

export const store = createStore(
	reducers,
	initialState,
	compose(applyMiddleware(...middleware))
);

export default store;
