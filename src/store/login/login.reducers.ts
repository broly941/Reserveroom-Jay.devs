import {LOGIN_FAILURE, LOGIN_SUCCESS, LoginActionTypes, LoginState, LOGOUT} from "./types";

const initialState: LoginState = {
    username: null,
    password: null,
    loggedIn: false,
    token: null,
    error: null
};

export function loginReducer(state: LoginState = initialState, action: LoginActionTypes): LoginState {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case LOGOUT:
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