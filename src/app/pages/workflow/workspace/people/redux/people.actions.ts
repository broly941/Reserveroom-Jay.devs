import {LOAD_PEOPLE, PeopleActionTypes} from "./types";

export const loadPeople = (): PeopleActionTypes => {
    return {
        type: LOAD_PEOPLE
    };
};