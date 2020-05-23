import axios from "axios";
import {BookDate} from "../../../../shared/store/types";
import {localStorageUtil, StorageKeys} from '../../../../shared/utils/StorageUtils';

const LOAD_ROOMS = 'http://localhost:8080/api/rooms';
const RESERVE_ROOM = 'http://localhost:8080/api/events';

class ReserveService {
    loadRooms = () => {
        const authToken = 'Bearer ' + localStorageUtil.get(StorageKeys.TOKEN);
        return axios.get(LOAD_ROOMS, {
            headers: {
                Authorization: authToken
            }
        });
    };

    reserveRoom = (roomId: number, date: BookDate) => {
        const data = {
            userId: localStorageUtil.get(StorageKeys.USER_ID),
            roomId: roomId,
            startTimeNumber: date.startDate.getTime(),
            finishTimeNumber: date.finishDate.getTime()
        };
        const authToken = 'Bearer ' + localStorageUtil.get(StorageKeys.TOKEN);
        return axios.post(RESERVE_ROOM, data, {
            headers: {
                Authorization: authToken
            }
        });
    };
}

export const reserveService = new ReserveService();
