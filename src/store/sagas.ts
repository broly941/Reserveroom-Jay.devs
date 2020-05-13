import loginSaga from './login/loginSaga';
import {all} from 'redux-saga/effects';
import bookingSaga from "./booking/bookingSaga";
import peopleSaga from "./people/peopleSaga";

function* sagas() {
    yield all([loginSaga(), bookingSaga(), peopleSaga()]);
}

export default sagas;
