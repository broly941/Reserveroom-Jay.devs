import {Booking, BookingActionTypes, LOAD_BOOKINGS_SUCCESS} from "./types";
import {Action, ThunkAction} from '@reduxjs/toolkit';
import {State} from '../../../../shared/store';
import {showError} from '../../../../shared/components/error-notification/redux/error.notification.actions';
import {bookingService} from './BookingService';

export const loadBookings = (userId: number):
    ThunkAction<void, State, unknown, Action<string>> => async dispatch => {
    try {
        const bookingResponse = await bookingService.loadBookings(userId);
        let bookings: Booking[] = bookingResponse.data.map((booking: any) => {
            return {
                roomName: booking.room.name,
                date: {
                    startDate: booking.startDate,
                    finishDate: booking.finishDate
                }
            }
        })
        dispatch(loadBookingSuccess(bookings));
    } catch (e) {
        let status = e.response.data.status;
        let error = e.response.data.error;
        console.error(status, error);
        dispatch(showError({
            isExists: true,
            error: {
                code: status + ' ' + error,
                message: 'Load Bookings Error. ' + e.response.data.message
            }
        }));
    }
};

export const loadBookingSuccess = (bookings: Booking[]): BookingActionTypes => {
    return {
        type: LOAD_BOOKINGS_SUCCESS,
        payload: bookings
    }
};