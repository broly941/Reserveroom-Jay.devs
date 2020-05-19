import {LOAD_ROOMS, RESERVE_ROOM, ReserveActionTypes} from "./types";
import {BookDate} from "../../../../../shared/store/types";

export const loadRooms = (): ReserveActionTypes => {
    return {
        type: LOAD_ROOMS
    };
};

export const reserveRoom = (roomId: number, date: BookDate): ReserveActionTypes => {
    debugger;
    return {
        type: RESERVE_ROOM,
        payload: {
            roomId: roomId,
            date: date
        }
    }
}
