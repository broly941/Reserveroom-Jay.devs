export enum LoginActionTypes {
    LOGOUT = 'LOGOUT',
    LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
}

export interface LoginAction {
    readonly type: LoginActionTypes;
    readonly payload?: string | any;
}

export const login = (username: string, password: string): LoginAction => {
    return {
        type: LoginActionTypes.LOGIN,
        payload: {
            username: username,
            password: password
        }
    };
};

export const logout = (): LoginAction => ({type: LoginActionTypes.LOGOUT});
