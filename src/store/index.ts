import {combineReducers} from "redux";
import {loginReducer, LoginState} from "./login/login.reducers";

export interface State {
    loginState: LoginState;
}

export const reducers = combineReducers<State>({
    loginState: loginReducer,
});


