import {ErrorState} from "../../../shared/store/types";
import {People} from "../../workflow/workspace/people/redux/types";

export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export interface LoginState {
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