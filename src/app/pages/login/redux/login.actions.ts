import {LOGIN, LoginActionTypes, LOGOUT} from "./types";
import {createAction} from '@reduxjs/toolkit';

export const login = (username: string, password: string): LoginActionTypes => {
    return {
        type: LOGIN,
        payload: {
            username: username,
            password: password
        }
    };
};