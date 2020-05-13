import {combineReducers} from "redux";
import {loginReducer} from "./login/login.reducers";
import {LoginState} from "./login/types";
import {bookingReducer} from "./booking/booking.reducers";
import {BookingState} from "./booking/types";
import {PeopleState} from "./people/types";
import {peopleReducer} from "./people/people.reducers";

export interface State {
    loginState: LoginState,
    bookingState: BookingState,
    peopleState: PeopleState
}

export const reducers = combineReducers<State>({
    loginState: loginReducer,
    bookingState: bookingReducer,
    peopleState: peopleReducer
});


