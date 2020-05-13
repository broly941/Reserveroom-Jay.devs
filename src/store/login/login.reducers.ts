import {LoginAction, LoginActionTypes} from "./login.actions";

export interface LoginState {
    username: string,
    password: string,
    login: boolean,
    token: string,
}

const initialState: LoginState = {
    username: '',
    password: '',
    login: false,
    token: ''
};

export function loginReducer(state: LoginState = initialState, action: LoginAction): LoginState {
    switch (action.type) {
        case LoginActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                login: true,
                token: action.payload.token,
                username: action.payload.username,
                password: action.payload.passowrd
            };
        case LoginActionTypes.LOGOUT:
        return {
            ...state,
            login: false,
            token: ''
        }
        default:
            return state;
    }
}