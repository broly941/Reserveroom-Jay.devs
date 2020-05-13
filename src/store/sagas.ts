import loginSaga from './login/loginSaga';
import {all} from 'redux-saga/effects';

function* sagas() {
    yield all([loginSaga()]);
}

export default sagas;
