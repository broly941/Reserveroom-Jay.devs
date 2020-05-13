import {LOGIN_FAILURE, LOGIN_SUCCESS, LoginActionTypes, LoginState, LOGOUT} from "./types";

const initialState: LoginState = {
    username: '',
    password: '',
    loggedIn: false,
    token: '',
    error: {code: "", message: ""}
};

export function loginReducer(state: LoginState = initialState, action: LoginActionTypes): LoginState {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                error: {code: '', message: ''}
            };
        case LOGOUT:
            debugger;
            return {
                ...state,
                ...initialState
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}