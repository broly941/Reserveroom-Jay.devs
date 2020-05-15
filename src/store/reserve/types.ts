import {ErrorState} from "../types";

export const LOAD_ROOMS = 'LOAD_ROOMS';
export const LOAD_ROOMS_SUCCESS = 'LOAD_ROOMS_SUCCESS';
export const LOAD_ROOMS_FAILURE = 'LOAD_ROOMS_FAILURE';

export interface Room {
    roomId: number,
    roomNumber: string
}

export interface ReserveState {
    rooms: Room[],
    error: ErrorState | null,
    isOpened: boolean,
}

export interface LoadRoomsAction {
    type: typeof LOAD_ROOMS;
    payload: {
        token: string
    };
}

export interface LoadRoomsSuccessAction {
    type: typeof LOAD_ROOMS_SUCCESS;
    payload: ReserveState;
}

export interface LoadRoomsFailureAction {
    type: typeof LOAD_ROOMS_FAILURE;
    payload: { error: ErrorState };
}

export type ReserveActionTypes = LoadRoomsAction | LoadRoomsSuccessAction | LoadRoomsFailureAction