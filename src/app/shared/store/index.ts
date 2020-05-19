import {combineReducers} from "redux";
import {loginReducer} from "../../pages/login/redux/login.reducers";
import {LoginState} from "../../pages/login/redux/types";
import {bookingReducer} from "../../pages/workflow/workspace/booking/redux/booking.reducers";
import {BookingState} from "../../pages/workflow/workspace/booking/redux/types";
import {PeopleState} from "../../pages/workflow/workspace/people/redux/types";
import {peopleReducer} from "../../pages/workflow/workspace/people/redux/people.reducers";
import {ReserveState} from "../../pages/workflow/workspace/reserve/redux/types";
import {reserveReducer} from "../../pages/workflow/workspace/reserve/redux/reserve.reducers";

export interface State {
    loginState: LoginState,
    bookingState: BookingState,
    peopleState: PeopleState,
    reserveState: ReserveState
}

export const reducers = combineReducers<State>({
    loginState: loginReducer,
    bookingState: bookingReducer,
    peopleState: peopleReducer,
    reserveState: reserveReducer
});


