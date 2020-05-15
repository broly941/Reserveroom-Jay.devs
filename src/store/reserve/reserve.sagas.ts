import {call, put, takeLatest} from 'redux-saga/effects'
import {LOAD_ROOMS, LOAD_ROOMS_FAILURE, LOAD_ROOMS_SUCCESS, LoadRoomsAction, ReserveState} from "./types";
import {reserveService} from "./ReserveService";

function* loadRooms(action: LoadRoomsAction) {
    try {
        const roomResponse = yield call(reserveService.loadRooms, action.payload.token);
        let result: ReserveState = roomResponse.data.map((room: any) => {
            return {
                roomId: room.roomId,
                roomNumber: room.name
            }
        })
        yield put({
            type: LOAD_ROOMS_SUCCESS,
            payload: {
                rooms: result,
                isOpened: true
            }
        });
    } catch (e) {
        let status = e.response.data.status;
        let error = e.response.data.error;
        console.error(status, error);
        yield put({
            type: LOAD_ROOMS_FAILURE,
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

function* reserveSaga() {
    yield takeLatest(LOAD_ROOMS, loadRooms);
}

export default reserveSaga;
