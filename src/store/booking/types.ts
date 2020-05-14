import {ErrorState} from "../types";
import {LogoutAction} from "../login/types";

export const LOAD_BOOKINGS = 'LOAD_BOOKINGS';
export const LOAD_BOOKINGS_SUCCESS = 'LOAD_BOOKINGS_SUCCESS';
export const LOAD_BOOKINGS_FAILURE = 'LOAD_BOOKINGS_FAILURE';

export interface BookingState {
    bookings: {
        roomName: string,
        startDate: Date,
        finishDate: Date
    } [],
    error: ErrorState | null,
    isOpened: boolean,
}

export interface LoadBookingAction {
    type: typeof LOAD_BOOKINGS;
    payload: {
        username: string,
        token: string
    };
}

export interface LoadBookingSuccessAction {
    type: typeof LOAD_BOOKINGS_SUCCESS;
    payload: BookingState;
}

export interface LoadBookingFailureAction {
    type: typeof LOAD_BOOKINGS_FAILURE;
    payload: { error: ErrorState };
}

export type BookingActionTypes = LoadBookingAction | LoadBookingSuccessAction | LoadBookingFailureAction | LogoutAction