import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AppRouts} from '../../constants/route-config';
import {useSelector} from 'react-redux';
import {State} from '../../store';

const useService = () => {
    const loggeId = useSelector((state: State) => state.loginState.loggedIn);
    return {loggeId};
};

export const PrivateRoute = ({component, ...rest}: any) => {
    const {loggeId} = useService();
    const routeComponent = (props: any) => (
        loggeId ? React.createElement(component, props)
            : <Redirect to={{pathname: AppRouts.LOGIN}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};