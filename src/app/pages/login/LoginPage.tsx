import React, {useEffect, useState} from 'react';
import {login} from "./redux/login.actions";
import {useDispatch} from "react-redux";

const useService = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return {dispatch, username, setUsername, password, setPassword};
};

export const LoginPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Sign In';
    }, []);
    const {dispatch, username, setUsername, password, setPassword} = useService();
    return (
        <section className="hero is-success is-fullheight has-background-light">
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
                                <div className="button is-block is-info is-large is-fullwidth"
                                     onClick={() => dispatch(login(username, password))}>Login
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}