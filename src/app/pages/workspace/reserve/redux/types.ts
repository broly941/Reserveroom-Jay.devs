export const LOAD_ROOMS_SUCCESS = 'LOAD_ROOMS_SUCCESS';
export const SELECT_ROOM = 'SELECT_ROOM';
export const SELECT_START_DATE = 'SELECT_START_DATE';
export const SELECT_FINISH_DATE = 'SELECT_FINISH_DATE';

export interface Room {
    roomId: number,
    roomNumber: string
}

export interface ReserveState {
    rooms: Room[],
    selectedRoom: number,
    selectedStartDate: number,
    selectedFinishDate: number
}

export interface LoadRoomsSuccessAction {
    type: typeof LOAD_ROOMS_SUCCESS,
    payload: Room[];
}

export interface SelectRoomAction {
    type: typeof SELECT_ROOM,
    payload: {
        roomId: number
    };
}

export interface SelectStartDateAction {
    type: typeof SELECT_START_DATE,
    payload: {
        selectedStartDate: number
    };
}


export interface SelectFinishDateAction {
    type: typeof SELECT_FINISH_DATE,
    payload: {
        selectedFinishDate: number
    };
}

export type ReserveActionTypes =
    LoadRoomsSuccessAction
    | SelectRoomAction
    | SelectStartDateAction
    | SelectFinishDateAction