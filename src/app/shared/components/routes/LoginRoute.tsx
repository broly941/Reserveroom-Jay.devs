import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {State} from '../../store';
import {AppRouts} from '../../constants/route-config';

const useService = () => {
    const loggedIn: boolean = useSelector((state: State) => state.loginState.loggedIn);
    return {loggedIn};
};

export const LoginRoute = ({component, ...rest}: any) => {
    const {loggedIn} = useService();
    const routeComponent = (props: any) => (
        !loggedIn ? React.createElement(component, props)
            : <Redirect to={{pathname: AppRouts.HOME}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};