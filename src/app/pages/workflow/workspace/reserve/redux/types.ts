import {BookDate, ErrorState} from "../../../../../shared/store/types";

export const LOAD_ROOMS = 'LOAD_ROOMS';
export const LOAD_ROOMS_SUCCESS = 'LOAD_ROOMS_SUCCESS';
export const LOAD_ROOMS_FAILURE = 'LOAD_ROOMS_FAILURE';
export const RESERVE_ROOM = 'RESERVE_ROOM';
export const RESERVE_ROOM_SUCCESS = 'RESERVE_ROOM_SUCCESS';
export const RESERVE_ROOM_FAILURE = 'RESERVE_ROOM_FAILURE';


export interface Room {
    roomId: number,
    roomNumber: string
}

export interface ReserveState {
    rooms: Room[],
    error: ErrorState | null
}

export interface LoadRoomsAction {
    type: typeof LOAD_ROOMS
}

export interface LoadRoomsSuccessAction {
    type: typeof LOAD_ROOMS_SUCCESS,
    payload: ReserveState;
}

export interface LoadRoomsFailureAction {
    type: typeof LOAD_ROOMS_FAILURE,
    payload: { error: ErrorState }
}

export interface ReserveRoomAction {
    type: typeof RESERVE_ROOM,
    payload: {
        roomId: number,
        date: BookDate
    }
}

export interface ReserveRoomSuccessAction {
    type: typeof RESERVE_ROOM_SUCCESS,
    payload: ReserveState;
}

export interface ReserveRoomFailureAction {
    type: typeof RESERVE_ROOM_FAILURE,
    payload: { error: ErrorState }
}

export type ReserveActionTypes =
    LoadRoomsAction
    | LoadRoomsSuccessAction
    | LoadRoomsFailureAction
    | ReserveRoomAction
    | ReserveRoomSuccessAction
    | ReserveRoomFailureAction