import {Action, combineReducers} from "redux";
import {bookingReducer} from "../../pages/workspace/booking/redux/booking.reducers";
import {BookingState} from "../../pages/workspace/booking/redux/types";
import {PeopleState} from "../../pages/workspace/people/redux/types";
import {peopleReducer} from "../../pages/workspace/people/redux/people.reducers";
import {ReserveState} from "../../pages/workspace/reserve/redux/types";
import {reserveReducer} from "../../pages/workspace/reserve/redux/reserve.reducers";
import {LoginState} from '../../pages/login/redux/types';
import {loginReducer} from '../../pages/login/redux/login.reducers';
import {errorReducer} from '../components/error-notification/redux/error.notification.reducers';
import {ErrorState} from '../components/error-notification/redux/types';
import {ThunkAction} from '@reduxjs/toolkit';

export interface State {
    errorState: ErrorState,
    loginState: LoginState,
    bookingState: BookingState,
    peopleState: PeopleState,
    reserveState: ReserveState
}

export const rootReducer = combineReducers<State>({
    errorState: errorReducer,
    loginState: loginReducer,
    bookingState: bookingReducer,
    peopleState: peopleReducer,
    reserveState: reserveReducer
});

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, Action<string>>