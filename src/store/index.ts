import {combineReducers} from "redux";
import {loginReducer} from "./login/login.reducers";
import {LoginState} from "./login/types";

export interface State {
    loginState: LoginState;
}

export const reducers = combineReducers<State>({
    loginState: loginReducer,
});


