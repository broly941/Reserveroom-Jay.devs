import axios from "axios";
import {BookingEndpoints} from "../../shared/constants/urls";

class BookingService {

    loadBookings = (username: string, token: string) => {
        const authToken = 'Bearer ' + token;
        return axios.get(BookingEndpoints.LOAD_BOOKING.replace('{username}', username), {
            headers: {
                Authorization: authToken
            }
        });
    };
}

export const bookingService = new BookingService();
