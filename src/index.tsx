import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import './index.scss';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {reducers} from './app/shared/store';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {NotFoundPage} from './app/pages/not-found/NotFoundPage';
import sagas from './app/shared/store/sagas';
import logger from 'redux-logger'
import LoginPage from './app/pages/login/LoginPage';
import {AppRouts} from './app/shared/constants/route-config';
import PrivateRoute from './app/shared/components/routes/PrivateRoute';
import {WorkflowPage} from './app/pages/workflow/WorkflowPage';
// import '../../../../bulma-debug.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(sagas)

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={AppRouts.LOGIN}/>}/>
                <Route exact path={AppRouts.LOGIN} component={LoginPage}/>
                <PrivateRoute path={AppRouts.HOME} component={WorkflowPage}/>
                <Route exact path={AppRouts.PAGE_NOT_FOUND} component={NotFoundPage}/>
                <Redirect to={AppRouts.PAGE_NOT_FOUND}/>*/}
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)
