import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {NotFoundPage} from './app/pages/not-found/NotFoundPage';
import {LoginPage} from './app/pages/login/LoginPage';
import {AppRouts} from './app/shared/constants/route-config';
import {PrivateRoute} from './app/shared/components/routes/PrivateRoute';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {reducers} from './app/shared/store';
import {ErrorNotification} from './app/shared/components/error-notification/ErrorNotification';
import {FooterPage} from './app/shared/components/footer/FooterPage';
import logger from 'redux-logger';
import {LoginRoute} from './app/shared/components/routes/LoginRoute';
import {WorkspacePage} from './app/pages/workspace/WorkspacePage';
// import './bulma-debug.css';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({reducer: reducers, middleware});

ReactDOM.render(
    <Provider store={store}>
        <ErrorNotification/>
        <HashRouter>
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={AppRouts.LOGIN}/>}/>
                <LoginRoute exact path={AppRouts.LOGIN} component={LoginPage}/>
                <PrivateRoute path={AppRouts.HOME} component={WorkspacePage}/>
                <Route exact path={AppRouts.PAGE_NOT_FOUND} component={NotFoundPage}/>
                <Redirect to={AppRouts.PAGE_NOT_FOUND}/>*/}
            </Switch>
        </HashRouter>
        <FooterPage/>
    </Provider>,
    document.getElementById('root')
)
