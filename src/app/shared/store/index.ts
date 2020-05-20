import {combineReducers} from "redux";
import {bookingReducer} from "../../pages/workflow/workspace/booking/redux/booking.reducers";
import {BookingState} from "../../pages/workflow/workspace/booking/redux/types";
import {PeopleState} from "../../pages/workflow/workspace/people/redux/types";
import {peopleReducer} from "../../pages/workflow/workspace/people/redux/people.reducers";
import {ReserveState} from "../../pages/workflow/workspace/reserve/redux/types";
import {reserveReducer} from "../../pages/workflow/workspace/reserve/redux/reserve.reducers";
import {LoginState} from '../../pages/login/redux/types';
import {loginReducer} from '../../pages/login/redux/login.reducers';
import {errorReducer} from '../components/error-notification/redux/error.notification.reducers';
import {ErrorState} from '../components/error-notification/redux/types';

export interface State {
    errorState: ErrorState,
    loginState: LoginState,
    bookingState: BookingState,
    peopleState: PeopleState,
    reserveState: ReserveState
}

export const reducers = combineReducers<State>({
    errorState: errorReducer,
    loginState: loginReducer,
    bookingState: bookingReducer,
    peopleState: peopleReducer,
    reserveState: reserveReducer
});


