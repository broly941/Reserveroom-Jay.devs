import {Booking} from "../../../store/booking/types";
import {ErrorState} from "../../../store/types";
import {People} from "../../../store/people/types";

export interface BookingProps {
    bookings: Booking [],
    error: ErrorState | null
}

export interface PeopleProps {
    people: People [],
    error: ErrorState | null
}

export interface WorkspaceContainerProps {
    isBookingOpened: boolean,
    isPeopleOpened: boolean
}

