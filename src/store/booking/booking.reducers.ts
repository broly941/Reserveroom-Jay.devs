import {BookingActionTypes, BookingState, LOAD_BOOKINGS_FAILURE, LOAD_BOOKINGS_SUCCESS} from "./types";
import {LOGOUT} from "../login/types";

const initialState: BookingState = {
    isOpened: false,
    bookings: null,
    error: null
};

export function bookingReducer(state: BookingState = initialState, action: BookingActionTypes): BookingState {
    switch (action.type) {
        case LOAD_BOOKINGS_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case LOAD_BOOKINGS_FAILURE:
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