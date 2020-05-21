import {LogoutAction} from "../../../login/redux/types";

export const LOAD_PEOPLE = 'LOAD_PEOPLE';
export const LOAD_PEOPLE_SUCCESS = 'LOAD_PEOPLE_SUCCESS';

export interface People {
    userId: number,
    username: string,
    email: string,
    mobilePhone: string
}

export interface PeopleState {
    people: People []
}

export interface LoadPeopleAction {
    type: typeof LOAD_PEOPLE
}

export interface LoadPeopleSuccessAction {
    type: typeof LOAD_PEOPLE_SUCCESS,
    payload: People []
}

export type PeopleActionTypes = LoadPeopleAction | LoadPeopleSuccessAction | LogoutAction