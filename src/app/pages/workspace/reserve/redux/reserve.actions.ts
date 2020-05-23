import {LOAD_ROOMS_SUCCESS, ReserveActionTypes, Room} from "./types";
import {BookDate} from "../../../../shared/store/types";
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

export const reserveRoom = (roomId: number, date: BookDate): AppThunk => async dispatch => {
    try {
        await reserveService.reserveRoom(roomId, date);
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
