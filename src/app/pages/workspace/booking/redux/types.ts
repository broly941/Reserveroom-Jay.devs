import {LogoutAction} from "../../../login/redux/types";

export const LOAD_BOOKINGS = 'LOAD_BOOKINGS';
export const LOAD_BOOKINGS_SUCCESS = 'LOAD_BOOKINGS_SUCCESS';

export interface BookDate {
    startDate: number,
    finishDate: number
}

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
    payload: Booking[]
}

export type BookingActionTypes = LoadBookingAction | LoadBookingSuccessAction | LogoutAction