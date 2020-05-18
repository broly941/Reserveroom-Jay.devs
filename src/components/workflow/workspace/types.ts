import {Booking} from "../../../store/booking/types";
import {BookDate, ErrorState} from "../../../store/types";
import {People} from "../../../store/people/types";
import {LoginState} from "../../../store/login/types";
import {ReserveState} from "../../../store/reserve/types";

export interface WorkspaceContainerProps {
    isBookingOpened: boolean,
    isPeopleOpened: boolean,
    isReserveOpened: boolean,
}

export interface BookingProps {
    bookings: Booking [],
    error: ErrorState | null
}

export interface PeopleProps {
    people: People [],
    error: ErrorState | null
}

export interface ReserveProps {
    loginProps: LoginState,
    reserveProps: ReserveState,
    reserveRoom: (userId: number, roomId: number, date: BookDate, token: string) => void
}