import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {loginService} from './LoginService';
import {LOGIN, LoginAction, LOGOUT} from './types';
import {peopleService} from '../../workflow/workspace/people/redux/PeopleService';
import {localStorageUtil} from '../../../shared/utils/StorageUtils';
import {StorageKeys} from '../../../shared/constants/storage-keys';
import {SHOW_ERROR} from '../../../components/error-notification/redux/types';

function* login(action: LoginAction) {
    try {
        const authResponse = yield call(loginService.loggedIn, action.payload.username, action.payload.password);
        let token = authResponse.data.token;
        localStorageUtil.put(StorageKeys.TOKEN, token);
        localStorageUtil.put(StorageKeys.LOGGED_IN, true);
        const userInfoResponse = yield call(peopleService.loadUserInfo, action.payload.username);
        localStorageUtil.put(StorageKeys.USER_ID, userInfoResponse.data.userId);
    } catch (e) {
        localStorageUtil.put(StorageKeys.LOGGED_IN, false);
        let status = e.response.data.status;
        let error = e.response.data.error;
        console.error(status, error);
        yield put({
            type: SHOW_ERROR,
            payload: {
                isExists: true,
                error: {
                    code: status + ' ' + error,
                    message: e.response.data.message
                }
            }
        });
    }
}

function* logout() {
}

function* loginSaga() {
    yield takeEvery(LOGIN, login);
    yield takeLatest(LOGOUT, logout);
}

export default loginSaga;
