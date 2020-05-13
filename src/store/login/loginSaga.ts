import {call, put, takeLatest, takeLeading} from 'redux-saga/effects'
import {LoginActionTypes} from './login.actions';
import {loginService} from "../../shared/services/LoginService";

function* login(action: any) {
    try {
        const response = yield call(loginService.login, action.payload.username, action.payload.password);
        yield put({
            type: LoginActionTypes.LOGIN_SUCCESS, payload: {
                username: action.payload.username,
                password: action.payload.password,
                token: response.token
            }
        });
    } catch (e) {
        // yield put({type: LoginActionTypes.LOGIN_FAILURE, payload: e.message});
    }
}

function* logout() {
    // try {
    //     localStorageUtil.put('loggedIn', false);
    //     yield put({type: UserPreferenceActionTypes.SET_SPELLCHECK, payload: false});
    //     yield put({type: LoginActionTypes.SET_LOGGED_IN, payload: false});
    //     yield put({type: LoginActionTypes.LOGOUT_SUCCESS});
    //     yield put({type: AppActionTypes.CLEAR_APP});
    //     store.dispatch(push('/login'));
    // } catch (e) {
    //     console.log('logout with error', e)
    // }
}

function* loginSaga() {
    yield takeLatest(LoginActionTypes.LOGIN, login);
    yield takeLeading(LoginActionTypes.LOGOUT, logout);
}

export default loginSaga;
