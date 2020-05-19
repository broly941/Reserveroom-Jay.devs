import React, {useEffect, useState} from 'react';
import {ErrorNotification} from "../../shared/components/error-notification/ErrorNotification";
import {Titles} from "../../shared/constants/titles";
import {State} from "../../shared/store";
import {Dispatch} from "redux";
import {hideNotification, login} from "./redux/login.actions";
import {connect} from "react-redux";
import {LoginState} from './redux/types';
import {Link} from 'react-router-dom';
import {AppRouts} from '../../shared/constants/route-config';

interface ThisProps {
    loginProps: LoginState,
    login: (username: string, password: string) => void,
    hideNotification: () => void
}

const LoginPage: React.FC<ThisProps> = ({loginProps, login, hideNotification}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.title = Titles.LOGIN_PAGE
    }, []);

    return (
        <section className="hero is-success is-fullheight has-background-light">
            <ErrorNotification error={loginProps.error} hideNotification={hideNotification}/>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-4 is-offset-4">
                        <h3 className="title has-text-black">Login</h3>
                        <hr className="has-background-black"/>
                        <p className="subtitle has-text-black">Please login to proceed.</p>
                        <div className="box">
                            <form>
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-large" type="username"
                                               placeholder="Your Username" autoFocus
                                               onChange={event => setUsername(event.target.value)}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-large" type="password"
                                               placeholder="Your Password"
                                               onChange={event => setPassword(event.target.value)}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="checkbox">
                                        <input type="checkbox"/>
                                        &nbsp;&nbsp;Remember me
                                    </label>
                                </div>
                                <Link to={AppRouts.HOME} className="button is-block is-info is-large is-fullwidth"
                                      onClick={() => login(username, password)}>Login
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);