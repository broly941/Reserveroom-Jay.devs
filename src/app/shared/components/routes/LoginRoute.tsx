import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {State} from '../../store';
import {AppRouts} from '../../constants/route-config';

const useService = () => {
    const loggeId = useSelector((state: State) => state.loginState.loggedIn);
    return {loggeId};
};

export const LoginRoute = ({component, ...rest}: any) => {
    const {loggeId} = useService();
    const routeComponent = (props: any) => (
        !loggeId ? React.createElement(component, props)
            : <Redirect to={{pathname: AppRouts.HOME}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};