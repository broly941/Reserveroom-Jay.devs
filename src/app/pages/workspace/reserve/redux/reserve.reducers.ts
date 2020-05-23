import {
    LOAD_ROOMS_SUCCESS,
    ReserveActionTypes,
    ReserveState,
    SELECT_FINISH_DATE,
    SELECT_ROOM,
    SELECT_START_DATE
} from "./types";

const initialState: ReserveState = {
    rooms: [],
    selectedRoom: -1,
    selectedStartDate: -1,
    selectedFinishDate: -1
};

export function reserveReducer(state: ReserveState = initialState, action: ReserveActionTypes): ReserveState {
    switch (action.type) {
        case LOAD_ROOMS_SUCCESS:
            return {
                ...state,
                rooms: action.payload
            };
        case SELECT_ROOM:
            return {
                ...state,
                selectedRoom: action.payload.roomId
            };
        case SELECT_START_DATE:
            return {
                ...state,
                selectedStartDate: action.payload.selectedStartDate
            };
        case SELECT_FINISH_DATE:
            return {
                ...state,
                selectedFinishDate: action.payload.selectedFinishDate
            };
        default:
            return state;
    }
}