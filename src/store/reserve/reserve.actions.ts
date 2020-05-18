import {LOAD_ROOMS, RESERVE_ROOM, ReserveActionTypes} from "./types";
import {BookDate} from "../types";

export const loadRooms = (token: string): ReserveActionTypes => {
    return {
        type: LOAD_ROOMS,
        payload: {
            token: token
        }
    };
};

export const reserveRoom = (userId: number, roomId: number, date: BookDate, token: string): ReserveActionTypes => {
    return {
        type: RESERVE_ROOM,
        payload: {
            userId: userId,
            roomId: roomId,
            date: date,
            token: token
        }
    }
}
