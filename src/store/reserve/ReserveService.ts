import axios from "axios";
import {ReserveroomEndpoints} from "../../shared/constants/urls";
import {BookDate} from "../types";

class ReserveService {

    loadRooms = (token: string) => {
        const authToken = 'Bearer ' + token;
        return axios.get(ReserveroomEndpoints.LOAD_ROOMS, {
            headers: {
                Authorization: authToken
            }
        });
    };

    reserveRoom = (userId: number, roomId: number, date: BookDate, token: string) => {
        const data = {
            userId: userId, roomId: roomId, startTimeNumber: date.startDate, finishTimeNumber: date.finishDate
        };
        const authToken = 'Bearer ' + token;
        return axios.post(ReserveroomEndpoints.RESERVE_ROOM, data, {
            headers: {
                Authorization: authToken
            }
        });
    };
}

export const reserveService = new ReserveService();
