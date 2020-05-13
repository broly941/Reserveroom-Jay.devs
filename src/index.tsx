import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import LoginContainer from './components/LoginContainer';
import createSagaMiddleware from 'redux-saga';
import {reducers} from "./store";
import loginSaga from "./store/login/loginSaga";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(loginSaga)

ReactDOM.render(
    <Provider store={store}>
        <LoginContainer/>
    </Provider>,
    document.getElementById('root')
)
