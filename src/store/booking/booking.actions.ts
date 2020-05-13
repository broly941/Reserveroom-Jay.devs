import {BookingActionTypes, LOAD_BOOKINGS} from "./types";

export const loadBookings = (username: string, token: string): BookingActionTypes => {
    return {
        type: LOAD_BOOKINGS,
        payload: {
            username: username,
            token: token
        }
    };
};