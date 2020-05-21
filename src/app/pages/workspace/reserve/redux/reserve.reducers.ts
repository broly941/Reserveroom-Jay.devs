import {LOAD_ROOMS_SUCCESS, ReserveActionTypes, ReserveState} from "./types";

const initialState: ReserveState = {
    rooms: []
};

export function reserveReducer(state: ReserveState = initialState, action: ReserveActionTypes): ReserveState {
    switch (action.type) {
        case LOAD_ROOMS_SUCCESS:
            return {
                ...state,
                rooms: action.payload
            };
        default:
            return state;
    }
}