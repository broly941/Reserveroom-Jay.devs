import {LOAD_PEOPLE_FAILURE, LOAD_PEOPLE_SUCCESS, PeopleActionTypes, PeopleState} from "./types";
import {LOGOUT} from "../login/types";

const initialState: PeopleState = {
    isOpened: false,
    people: [],
    error: null
};

export function peopleReducer(state: PeopleState = initialState, action: PeopleActionTypes): PeopleState {
    switch (action.type) {
        case LOAD_PEOPLE_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case LOAD_PEOPLE_FAILURE:
            return {
                ...state,
                ...action.payload
            };
        case LOGOUT:
            return {
                ...state,
                ...initialState
            }
        default:
            return state;
    }
}