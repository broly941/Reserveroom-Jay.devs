import {LOAD_PEOPLE, PeopleActionTypes} from "./types";

export const loadPeople = (token: string): PeopleActionTypes => {
    return {
        type: LOAD_PEOPLE,
        payload: {
            token: token
        }
    };
};