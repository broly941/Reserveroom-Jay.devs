import {ErrorState} from "../types";
import {LogoutAction} from "../login/types";

export const LOAD_PEOPLE = 'LOAD_PEOPLE';
export const LOAD_PEOPLE_SUCCESS = 'LOAD_PEOPLE_SUCCESS';
export const LOAD_PEOPLE_FAILURE = 'LOAD_PEOPLE_FAILURE';

export interface PeopleState {
    people: {
        username: string,
        email: string,
        mobilePhone: string
    } [],
    error: ErrorState | null,
    isOpened: boolean,
}

export interface LoadPeopleAction {
    type: typeof LOAD_PEOPLE;
    payload: {
        token: string
    };
}

export interface LoadPeopleSuccessAction {
    type: typeof LOAD_PEOPLE_SUCCESS;
    payload: PeopleState;
}

export interface LoadPeopleFailureAction {
    type: typeof LOAD_PEOPLE_FAILURE;
    payload: { error: ErrorState };
}

export type PeopleActionTypes = LoadPeopleAction | LoadPeopleSuccessAction | LoadPeopleFailureAction | LogoutAction