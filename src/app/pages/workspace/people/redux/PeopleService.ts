import axios from "axios";
import {PeopleEndpoints} from "../../../../shared/constants/urls";
import {StorageKeys} from '../../../../shared/constants/storage-keys';
import {localStorageUtil} from '../../../../shared/utils/StorageUtils';

class PeopleService {

    loadPeople = () => {
        const authToken = 'Bearer ' + localStorageUtil.get(StorageKeys.TOKEN);
        return axios.get(PeopleEndpoints.LOAD_PEOPLE, {
            headers: {
                Authorization: authToken
            }
        });
    };

    loadUserInfo = (username: string) => {
        const authToken = 'Bearer ' + localStorageUtil.get(StorageKeys.TOKEN);
        return axios.get(PeopleEndpoints.LOAD_USER_INFO.replace('{username}', username), {
            headers: {
                Authorization: authToken
            }
        });
    };
}

export const peopleService = new PeopleService();
