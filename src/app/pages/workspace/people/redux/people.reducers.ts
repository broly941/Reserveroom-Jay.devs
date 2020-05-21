import {LOAD_PEOPLE_SUCCESS, PeopleActionTypes, PeopleState} from "./types";

const initialState: PeopleState = {
    people: []
};

export function peopleReducer(state: PeopleState = initialState, action: PeopleActionTypes): PeopleState {
    switch (action.type) {
        case LOAD_PEOPLE_SUCCESS:
            return {
                ...state,
                people: action.payload
            };
        default:
            return state;
    }
}