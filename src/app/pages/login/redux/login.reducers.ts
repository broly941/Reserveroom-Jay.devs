import {LOGIN_SUCCESS, LoginActionTypes, LoginState, LOGOUT} from './types';

const initialState: LoginState = {
    loggedIn: false,
    token: '',
    userId: -1,
    username: ''
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
            };
        default:
            return state;
    }
}