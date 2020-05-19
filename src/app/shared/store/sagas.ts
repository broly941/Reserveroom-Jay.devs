import loginSaga from '../../pages/login/redux/loginSaga';
import {all} from 'redux-saga/effects';
import bookingSaga from "../../pages/workflow/workspace/booking/redux/bookingSaga";
import peopleSaga from "../../pages/workflow/workspace/people/redux/peopleSaga";
import reserveSaga from "../../pages/workflow/workspace/reserve/redux/reserve.sagas";

function* sagas() {
    yield all([loginSaga(), bookingSaga(), peopleSaga(), reserveSaga()]);
}

export default sagas;
