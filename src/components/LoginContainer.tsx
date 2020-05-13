import React, {Component} from "react";
import {State} from "../store";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {login, logout} from "../store/login/login.actions";

class LoginContainer extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: 'Ilya Korzhavin',
            password: '123456'
        };
    }

    render() {
        return (
            <div>
                <h1>Reserveroom</h1>
                {
                    !this.props.loginState.login ?
                        (
                            <div>
                                <div>
                                    <input type={"text"} defaultValue={this.state.username}
                                           onChange={(event) => this.setState({username: event.target.value})}/>
                                    <input type={"text"} defaultValue={this.state.password}
                                           onChange={(event) => this.setState({password: event.target.value})}/>
                                    <button
                                        onClick={() => this.props.actions.loginUser(this.state.username, this.state.password)}>LogIn
                                    </button>
                                </div>
                            </div>
                        )
                        :
                        (<div>
                            <h1>Hello, {this.state.username}!</h1>
                            <button
                                onClick={() => this.props.actions.logoutUser()}>LogOut
                            </button>
                        </div>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state: State) => {
    return {
        loginState: state.loginState,
    }
};
//
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         loginUser: (username: string, password: string) => dispatch(login(username, password)),
//         logoutUser: () => dispatch(logout())
//     }
// };

function mapDispatchToProps(dispatch: any) {
    return {
        actions: {
            loginUser: bindActionCreators(login, dispatch),
            logoutUser: bindActionCreators(logout, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);