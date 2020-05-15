import loginSaga from './login/loginSaga';
import {all} from 'redux-saga/effects';
import bookingSaga from "./booking/bookingSaga";
import peopleSaga from "./people/peopleSaga";
import reserveSaga from "./reserve/reserve.sagas";

function* sagas() {
    yield all([loginSaga(), bookingSaga(), peopleSaga(), reserveSaga()]);
}

export default sagas;
