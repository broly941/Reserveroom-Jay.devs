import {BookingActionTypes, BookingState, LOAD_BOOKINGS_SUCCESS} from "./types";
import {LOGOUT} from "../../../../login/redux/types";

const initialState: BookingState = {
    bookings: []
};

export function bookingReducer(state: BookingState = initialState, action: BookingActionTypes): BookingState {
    switch (action.type) {
        case LOAD_BOOKINGS_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}