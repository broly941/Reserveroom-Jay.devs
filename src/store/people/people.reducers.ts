import {LOAD_PEOPLE_FAILURE, LOAD_PEOPLE_SUCCESS, PeopleActionTypes, PeopleState} from "./types";
import {LOGOUT} from "../login/types";

const initialState: PeopleState = {
    isOpened: false,
    people: null,
    error: null
};

export function peopleReducer(state: PeopleState = initialState, action: PeopleActionTypes): PeopleState {
    switch (action.type) {
        case LOAD_PEOPLE_SUCCESS:
            debugger;
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