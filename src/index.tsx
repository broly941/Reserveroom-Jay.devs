import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import LoginContainer from './components/login/LoginContainer';
import createSagaMiddleware from 'redux-saga';
import {reducers} from "./store";
import loginSaga from "./store/login/loginSaga";
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import WorkflowPage from "./components/workflow/WorkflowPage";
import NotFoundPage from "./components/login/notFound/NotFoundPage";
import "./index.scss";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(loginSaga)

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={'/login'}/>}/>
                <Route exact path={'/login'} render={() => <LoginContainer/>}/>
                <Route exact path={'/home'} render={() => <WorkflowPage/>}/>
                <Route exact path={'/404'} component={NotFoundPage}/>
                <Redirect to={'/404'}/>
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)
