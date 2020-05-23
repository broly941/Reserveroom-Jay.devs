import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AppRouts} from '../../constants/route-config';
import {useSelector} from 'react-redux';
import {State} from '../../store';

const useService = () => {
    const loggedIn: boolean = useSelector((state: State) => state.loginState.loggedIn);
    return {loggedIn};
};

export const PrivateRoute = ({component, ...rest}: any) => {
    const {loggedIn} = useService();
    const routeComponent = (props: any) => (
        loggedIn ? React.createElement(component, props)
            : <Redirect to={{pathname: AppRouts.LOGIN}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};