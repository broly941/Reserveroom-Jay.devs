import {call, put, takeLatest} from 'redux-saga/effects'
import {BookingState, LOAD_BOOKINGS, LOAD_BOOKINGS_FAILURE, LOAD_BOOKINGS_SUCCESS, LoadBookingAction} from "./types";
import {bookingService} from "./BookingService";
import {BookDate} from "../types";

function* loadBookings(action: LoadBookingAction) {
    try {
        const response = yield call(bookingService.loadBookings, action.payload.username, action.payload.token);
        let result: BookingState = response.data.map((booking: any) => {
            return {
                roomName: booking.room.name,
                date: {
                    startDate: booking.startDate,
                    finishDate: booking.finishDate
                }
            }
        })
        yield put({
            type: LOAD_BOOKINGS_SUCCESS,
            payload: {
                bookings: result,
                isOpened: true
            }
        });
    } catch (e) {
        let status = e.response.data.status;
        let error = e.response.data.error;
        console.error(status, error);
        yield put({
            type: LOAD_BOOKINGS_FAILURE,
            payload: {
                isOpened: false,
                error: {
                    code: status + ' ' + error,
                    message: e.response.data.message
                }
            }
        });
    }
}

function* bookingSaga() {
    yield takeLatest(LOAD_BOOKINGS, loadBookings);
}

export default bookingSaga;
