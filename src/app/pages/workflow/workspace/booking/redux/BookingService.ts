import axios from "axios";
import {BookingEndpoints} from "../../../../../shared/constants/urls";
import {StorageKeys} from '../../../../../shared/constants/storage-keys';
import {localStorageUtil} from '../../../../../shared/utils/StorageUtils';

class BookingService {

    loadBookings = () => {
        const authToken = 'Bearer ' + localStorageUtil.get(StorageKeys.TOKEN);
        const userId: string = localStorageUtil.get(StorageKeys.USER_ID);
        return axios.get(BookingEndpoints.LOAD_BOOKING.replace('{userId}', userId), {
            headers: {
                Authorization: authToken
            }
        });
    };
}

export const bookingService = new BookingService();
