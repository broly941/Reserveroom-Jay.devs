import axios from "axios";
import {ReserveroomEndpoints} from "../../shared/constants/urls";

class ReserveService {

    loadRooms = (token: string) => {
        const authToken = 'Bearer ' + token;
        return axios.get(ReserveroomEndpoints.LOAD_ROOMS, {
            headers: {
                Authorization: authToken
            }
        });
    };
}

export const reserveService = new ReserveService();
