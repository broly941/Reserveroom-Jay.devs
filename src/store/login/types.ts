export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export interface LoginState {
    username: string,
    password: string,
    loggedIn: boolean,
    token: string,
    error: {
        code: string,
        message: string
    }
}

export interface LoginAction {
    type: typeof LOGIN;
    payload: {
        username: string,
        password: string
    };
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: LoginState;
}

export interface LogoutAction {
    type: typeof LOGOUT;
}

export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: LoginState;
}

export type LoginActionTypes = LoginAction | LogoutAction | LoginSuccessAction | LoginFailureAction