import {BookingActionTypes, LOAD_BOOKINGS} from "./types";

export const loadBookings = (): BookingActionTypes => {
    return {
        type: LOAD_BOOKINGS
    };
};