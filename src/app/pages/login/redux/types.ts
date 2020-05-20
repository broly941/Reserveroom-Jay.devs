export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export interface LoginState {
    loggedIn: boolean,
    token: string,
    userId: number
}

export interface LoginAction {
    type: typeof LOGIN,
    payload: {
        username: string,
        password: string
    }
}

export interface LogoutAction {
    type: typeof LOGOUT
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS,
    payload: LoginState
}

export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE
}

export type LoginActionTypes = LoginAction | LoginSuccessAction | LoginFailureAction | LogoutAction