export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';

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

export type LoginActionTypes = LoginAction | LogoutAction