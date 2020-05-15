import {LOAD_ROOMS, ReserveActionTypes} from "./types";

export const loadRooms = (token: string): ReserveActionTypes => {
    console.log('Отправляю акшион!');
    return {
        type: LOAD_ROOMS,
        payload: {
            token: token
        }
    };
};