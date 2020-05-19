import axios from "axios";
import {ReserveroomEndpoints} from "../../../../../shared/constants/urls";
import {BookDate} from "../../../../../shared/store/types";
import {StorageKeys} from '../../../../../shared/constants/storage-keys';
import {localStorageUtil} from '../../../../../shared/utils/StorageUtils';

class ReserveService {

    loadRooms = () => {
        const authToken = 'Bearer ' + localStorageUtil.get(StorageKeys.TOKEN);
        return axios.get(ReserveroomEndpoints.LOAD_ROOMS, {
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
        return axios.post(ReserveroomEndpoints.RESERVE_ROOM, data, {
            headers: {
                Authorization: authToken
            }
        });
    };
}

export const reserveService = new ReserveService();
