import axios from "axios";
import {PeopleEndpoints} from "../../shared/constants/urls";

class PeopleService {

    loadPeople = (token: string) => {
        const authToken = 'Bearer ' + token;
        return axios.get(PeopleEndpoints.LOAD_PEOPLE, {
            headers: {
                Authorization: authToken
            }
        });
    };
}

export const peopleService = new PeopleService();
