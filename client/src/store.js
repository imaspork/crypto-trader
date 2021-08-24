import { createStore, combineReducers } from "redux";
import coinPage from "./redux/coinPage/reducers";
import logInPage from "./redux/logInPage/reducers";

const reducers = combineReducers({ coinPage, logInPage });

export const store = createStore(reducers);

export default store;
