import {
    ReserveActionTypes,
    Room,
    SELECT_ROOM,
    LOAD_ROOMS_SUCCESS,
    SELECT_START_DATE,
    SELECT_FINISH_DATE
} from "./types";
import {AppThunk} from '../../../../shared/store';
import {showError} from '../../../../shared/components/error-notification/redux/error.notification.actions';
import {reserveService} from './ReserveService';

export const loadRooms = (): AppThunk => async dispatch => {
    try {
        const roomResponse = await reserveService.loadRooms();
        let rooms: Room[] = roomResponse.data.map((room: any) => {
            return {
                roomId: room.roomId,
                roomNumber: room.name
            }
        });
        dispatch(loadRoomsSuccess(rooms));
    } catch
        (e) {
        let status = e.response.data.status;
        let error = e.response.data.error;
        console.error(status, error);
        dispatch(showError({
            isExists: true,
            error: {
                code: status + ' ' + error,
                message: 'Load Rooms Error. ' + e.response.data.message
            }
        }));
    }
};

export const loadRoomsSuccess = (rooms: Room[]): ReserveActionTypes => {
    return {
        type: LOAD_ROOMS_SUCCESS,
        payload: rooms
    }
};

export const reserveRoom = (roomId: number, startDate: number, finishDate: number): AppThunk => async dispatch => {
    try {
        await reserveService.reserveRoom(roomId, startDate, finishDate);
    } catch
        (e) {
        let status = e.response.data.status;
        let error = e.response.data.error;
        console.error(status, error);
        dispatch(showError({
            isExists: true,
            error: {
                code: status + ' ' + error,
                message: 'Reserve Room Error. ' + e.response.data.message
            }
        }));
    }
};

export const selectRoom = (roomId: number): ReserveActionTypes => {
    return {
        type: SELECT_ROOM,
        payload: {
            roomId: roomId
        }
    }
};

export const selectStartDate = (startDate: number): ReserveActionTypes => {
    return {
        type: SELECT_START_DATE,
        payload: {
            selectedStartDate: startDate
        }
    }
};

export const selectFinishDate = (finishDate: number): ReserveActionTypes => {
    return {
        type: SELECT_FINISH_DATE,
        payload: {
            selectedFinishDate: finishDate
        }
    }
};