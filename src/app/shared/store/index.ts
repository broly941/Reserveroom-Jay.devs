import {combineReducers} from "redux";
import {bookingReducer} from "../../pages/workflow/workspace/booking/redux/booking.reducers";
import {BookingState} from "../../pages/workflow/workspace/booking/redux/types";
import {PeopleState} from "../../pages/workflow/workspace/people/redux/types";
import {peopleReducer} from "../../pages/workflow/workspace/people/redux/people.reducers";
import {ReserveState} from "../../pages/workflow/workspace/reserve/redux/types";
import {reserveReducer} from "../../pages/workflow/workspace/reserve/redux/reserve.reducers";
import {ErrorState} from '../../components/error-notification/redux/types';
import {errorReducer} from '../../components/error-notification/redux/error.notification.reducers';

export interface State {
    errorState: ErrorState,
    bookingState: BookingState,
    peopleState: PeopleState,
    reserveState: ReserveState
}

export const reducers = combineReducers<State>({
    errorState: errorReducer,
    bookingState: bookingReducer,
    peopleState: peopleReducer,
    reserveState: reserveReducer
});


