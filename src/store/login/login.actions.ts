import {LOGIN, LoginActionTypes, LOGOUT} from "./types";

export const login = (username: string, password: string): LoginActionTypes => {
    return {
        type: LOGIN,
        payload: {
            username: username,
            password: password
        }
    };
};

export const logout = (): LoginActionTypes => ({type: LOGOUT});
