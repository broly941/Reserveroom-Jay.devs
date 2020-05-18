import {ErrorState} from "../types";
import {People} from "../people/types";

export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export interface LoginState {
    user: People,
    password: string,
    loggedIn: boolean,
    token: string,
    error: ErrorState | null
}

export interface LoginAction {
    type: typeof LOGIN,
    payload: {
        username: string,
        password: string
    }
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS,
    payload: LoginState
}

export interface LogoutAction {
    type: typeof LOGOUT
}

export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE,
    payload: LoginState
}

export interface HideNotificationAction {
    type: typeof HIDE_NOTIFICATION
}

export type LoginActionTypes =
    LoginAction
    | LogoutAction
    | LoginSuccessAction
    | LoginFailureAction
    | HideNotificationAction