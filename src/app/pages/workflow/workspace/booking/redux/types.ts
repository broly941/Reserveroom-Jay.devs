import {BookDate} from "../../../../../shared/store/types";
import {LogoutAction} from "../../../../login/redux/types";

export const LOAD_BOOKINGS = 'LOAD_BOOKINGS';
export const LOAD_BOOKINGS_SUCCESS = 'LOAD_BOOKINGS_SUCCESS';
export const LOAD_BOOKINGS_FAILURE = 'LOAD_BOOKINGS_FAILURE';

export interface Booking {
    roomName: string,
    date: BookDate
}

export interface BookingState {
    bookings: Booking []
}

export interface LoadBookingAction {
    type: typeof LOAD_BOOKINGS
}

export interface LoadBookingSuccessAction {
    type: typeof LOAD_BOOKINGS_SUCCESS,
    payload: BookingState
}

export type BookingActionTypes = LoadBookingAction | LoadBookingSuccessAction | LogoutAction