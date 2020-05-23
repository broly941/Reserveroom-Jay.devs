import axios from "axios";
import {localStorageUtil, StorageKeys} from '../../../../shared/utils/StorageUtils';

const LOAD_BOOKING = 'http://localhost:8080/api/events/user/{userId}';

class BookingService {
    loadBookings = (userId: number) => {
        const authToken = 'Bearer ' + localStorageUtil.get(StorageKeys.TOKEN);
        return axios.get(LOAD_BOOKING.replace('{userId}', userId.toString()), {
            headers: {
                Authorization: authToken
            }
        });
    };
}

export const bookingService = new BookingService();
