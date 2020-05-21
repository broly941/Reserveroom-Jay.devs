import {BookingActionTypes, BookingState, LOAD_BOOKINGS_SUCCESS} from "./types";

const initialState: BookingState = {
    bookings: []
};

export function bookingReducer(state: BookingState = initialState, action: BookingActionTypes): BookingState {
    switch (action.type) {
        case LOAD_BOOKINGS_SUCCESS:
            return {
                ...state,
                bookings: action.payload
            };
        default:
            return state;
    }
}