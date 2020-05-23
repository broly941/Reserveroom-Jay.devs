import axios from "axios";
import {localStorageUtil, StorageKeys} from '../../../../shared/utils/StorageUtils';

const LOAD_PEOPLE = 'http://localhost:8080/api/users';
const LOAD_USER_INFO = 'http://localhost:8080/api/users/{username}';

class PeopleService {
    loadPeople = () => {
        const authToken = 'Bearer ' + localStorageUtil.get(StorageKeys.TOKEN);
        return axios.get(LOAD_PEOPLE, {
            headers: {
                Authorization: authToken
            }
        });
    };

    loadUserInfo = (username: string) => {
        const authToken = 'Bearer ' + localStorageUtil.get(StorageKeys.TOKEN);
        return axios.get(LOAD_USER_INFO.replace('{username}', username), {
            headers: {
                Authorization: authToken
            }
        });
    };
}

export const peopleService = new PeopleService();
