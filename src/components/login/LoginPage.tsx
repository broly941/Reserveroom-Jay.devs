import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {LoginProps} from "./types";
import {ErrorNotification} from "./ErrorNotification";

export const LoginPage: React.FC<LoginProps> = ({loginProps, login, hideNotification}) => {
    const [username, setUsername] = useState(loginProps.username);
    const [password, setPassword] = useState(loginProps.username);

    return (
        loginProps.loggedIn ? <Redirect to={'/home'}/> :
            (
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

                                        <button className="button is-block is-info is-large is-fullwidth"
                                                onClick={() => login(username, password)}>Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
    )
}