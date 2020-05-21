import axios from "axios";
import {BookingEndpoints} from "../../../../shared/constants/urls";
import {StorageKeys} from '../../../../shared/constants/storage-keys';
import {localStorageUtil} from '../../../../shared/utils/StorageUtils';

class BookingService {

    loadBookings = (userId: number) => {
        const authToken = 'Bearer ' + localStorageUtil.get(StorageKeys.TOKEN);
        return axios.get(BookingEndpoints.LOAD_BOOKING.replace('{userId}', userId.toString()), {
            headers: {
                Authorization: authToken
            }
        });
    };
}

export const bookingService = new BookingService();
