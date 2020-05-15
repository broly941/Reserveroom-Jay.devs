import {LOAD_ROOMS_FAILURE, LOAD_ROOMS_SUCCESS, ReserveActionTypes, ReserveState} from "./types";

const initialState: ReserveState = {
    rooms: [],
    isOpened: false,
    error: null
};

export function reserveReducer(state: ReserveState = initialState, action: ReserveActionTypes): ReserveState {
    switch (action.type) {
        case LOAD_ROOMS_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case LOAD_ROOMS_FAILURE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}