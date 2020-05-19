import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {
    LOAD_ROOMS,
    LOAD_ROOMS_FAILURE,
    LOAD_ROOMS_SUCCESS,
    RESERVE_ROOM,
    ReserveRoomAction,
    ReserveState
} from "./types";
import {reserveService} from "./ReserveService";

function* loadRooms() {
    try {
        const roomResponse = yield call(reserveService.loadRooms);
        let result: ReserveState = roomResponse.data.map((room: any) => {
            return {
                roomId: room.roomId,
                roomNumber: room.name
            }
        })
        yield put({
            type: LOAD_ROOMS_SUCCESS,
            payload: {
                rooms: result
            }
        });
    } catch (e) {
        let status = e.response.data.status;
        let error = e.response.data.error;
        console.error(status, error);
        yield put({
            type: LOAD_ROOMS_FAILURE,
            payload: {
                error: {
                    code: status + ' ' + error,
                    message: e.response.data.message
                }
            }
        });
    }
}

function* reserveRoom(action: ReserveRoomAction) {
    try {
        debugger;
        const reserveRoomResponse = yield call(
            reserveService.reserveRoom, action.payload.roomId, action.payload.date);
        debugger;
    } catch (e) {
        debugger;
    }
}

function* reserveSaga() {
    yield takeLatest(LOAD_ROOMS, loadRooms);
    yield takeEvery(RESERVE_ROOM, reserveRoom);
}

export default reserveSaga;
