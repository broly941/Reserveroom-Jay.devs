export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export interface LoginState {
    loggedIn: boolean,
    token: string,
    userId: number,
    username: string
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

export type LoginActionTypes = LoginAction | LoginSuccessAction | LogoutAction