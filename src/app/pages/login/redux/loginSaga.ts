import {call, put, takeEvery} from 'redux-saga/effects'
import {loginService} from './LoginService';
import {LOGIN, LOGIN_SUCCESS, LoginAction} from './types';
import {peopleService} from '../../workflow/workspace/people/redux/PeopleService';
import {localStorageUtil} from '../../../shared/utils/StorageUtils';
import {StorageKeys} from '../../../shared/constants/storage-keys';
import {SHOW_ERROR} from '../../../shared/components/error-notification/redux/types';

function* login(action: LoginAction) {
    try {
        const authResponse = yield call(loginService.loggedIn, action.payload.username, action.payload.password);
        let token = authResponse.data.token;
        localStorageUtil.put(StorageKeys.TOKEN, token);
        const userInfoResponse = yield call(peopleService.loadUserInfo, action.payload.username);
        yield put({
            type: LOGIN_SUCCESS,
            payload: {
                loggedIn: true,
                token: token,
                userId: userInfoResponse.data.userId
            }
        });
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

function* loginSaga() {
    yield takeEvery(LOGIN, login);
}

export default loginSaga;
