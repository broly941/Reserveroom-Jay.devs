import {HIDE_NOTIFICATION, LOGIN_FAILURE, LOGIN_SUCCESS, LoginActionTypes, LoginState, LOGOUT} from "./types";

const initialState: LoginState = {
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
        case HIDE_NOTIFICATION:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}