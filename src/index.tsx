import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {NotFoundPage} from './app/pages/not-found/NotFoundPage';
import sagas from './app/shared/store/sagas';
import {LoginPage} from './app/pages/login/LoginPage';
import {AppRouts} from './app/shared/constants/route-config';
import PrivateRoute from './app/shared/components/routes/PrivateRoute';
import {WorkflowPage} from './app/pages/workflow/WorkflowPage';
import {applyMiddleware, configureStore, createSlice, createStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {FooterPage} from './app/components/footer/FooterPage';
import {ErrorNotification} from './app/components/error-notification/ErrorNotification';
import {reducers} from './app/shared/store';
import logger from 'redux-logger';
// import '../../../../bulma-debug.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(sagas)

// const todoSlice = createSlice({
//     name: "todo",
//     initialState: {
//         todos: []
//     },
//     reducers: {
//         fetchData: (state, action) => {
//             return {
//                 todos: action.payload
//             };
//         }
//     }
// });
//
// export const {fetchData} = todoSlice.actions;
//
// let sagaMiddleware = createSagaMiddleware();
// const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];
//
// const store = configureStore({
//     reducer: {
//         todo: todoSlice.reducer
//     },
//     middleware
// });
//
// sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <ErrorNotification/>
        <HashRouter>
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={AppRouts.LOGIN}/>}/>
                <Route exact path={AppRouts.LOGIN} component={LoginPage}/>
                <PrivateRoute path={AppRouts.HOME} component={WorkflowPage}/>
                <Route exact path={AppRouts.PAGE_NOT_FOUND} component={NotFoundPage}/>
                <Redirect to={AppRouts.PAGE_NOT_FOUND}/>*/}
            </Switch>
        </HashRouter>
        <FooterPage/>
    </Provider>,
    document.getElementById('root')
)
