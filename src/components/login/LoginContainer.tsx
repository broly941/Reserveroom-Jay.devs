import React, {useEffect} from 'react';
import {LoginPage} from "./LoginPage";
import {connect} from "react-redux";
import {State} from "../../store";
import {Dispatch} from "redux";
import {hideNotification, login} from "../../store/login/login.actions";
import {LoginProps} from "./types";
import {Titles} from "../../shared/constants/title";

const LoginContainer: React.FC<LoginProps> = ({loginProps, login, hideNotification}) => {
    useEffect(() => {
        document.title = Titles.LOGIN_PAGE
    }, []);

    return (
        <LoginPage loginProps={loginProps} login={login} hideNotification={hideNotification}/>
    )
}

const mapStateToProps = (state: State) => {
    return {
        loginProps: state.loginState,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        login: (username: string, password: string) => dispatch(login(username, password)),
        hideNotification: () => dispatch(hideNotification()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);