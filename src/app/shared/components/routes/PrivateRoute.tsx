import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AppRouts} from '../../constants/route-config';
import {StorageKeys} from '../../constants/storage-keys';
import {localStorageUtil} from '../../utils/StorageUtils';

const PrivateRoute = ({component, ...rest}: any) => {
    const routeComponent = (props: any) => (
        localStorageUtil.get(StorageKeys.LOGGED_IN) ? React.createElement(component, props)
            : <Redirect to={{pathname: AppRouts.LOGIN}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};

export default PrivateRoute;
