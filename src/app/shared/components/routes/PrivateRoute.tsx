import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AppRouts} from '../../constants/route-config';
import {useSelector} from 'react-redux';
import {State} from '../../store';

const PrivateRoute = ({component, ...rest}: any) => {
    const loggeId = useSelector((state: State) => state.loginState.loggedIn)
    const routeComponent = (props: any) => (
        loggeId ? React.createElement(component, props)
            : <Redirect to={{pathname: AppRouts.LOGIN}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};

export default PrivateRoute;
