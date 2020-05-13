import './LoginContainer.scss';
import React, {Component} from "react";
import {State} from "../../store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {login, logout} from "../../store/login/login.actions";
import {Redirect} from 'react-router-dom';

class LoginContainer extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            //todo set empty state
            username: '',
            password: ''
        };
    }

    handleLogin = () => this.props.login(this.state.username, this.state.password);
    handleUsernameChange = (e: any) => this.setState({username: e.target.value})
    handlePasswordChange = (e: any) => this.setState({password: e.target.value});

    render() {
        return (
            this.props.loginState.loggedIn ? <Redirect to={'/home'}/> :
                (
                    <section className="hero is-success is-fullheight has-background-light">
                        {
                            this.props.loginState.error.code &&
                            <div className="notification is-danger is-light has-text-centered">
                                <button className="delete "/>
                                <p>Error: {this.props.loginState.error.code}</p>
                                <p>Description: {this.props.loginState.error.message}</p>
                            </div>
                        }
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
                                                           onChange={this.handleUsernameChange}/>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <div className="control">
                                                    <input className="input is-large" type="password"
                                                           placeholder="Your Password"
                                                           onChange={this.handlePasswordChange}/>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label className="checkbox">
                                                    <input type="checkbox"/>
                                                    &nbsp;&nbsp;Remember me
                                                </label>
                                            </div>

                                            <button className="button is-block is-info is-large is-fullwidth"
                                                    onClick={this.handleLogin}>Login
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
}

const mapStateToProps = (state: State) => {
    return {
        loginState: state.loginState,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        login: (username: string, password: string) => dispatch(login(username, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);