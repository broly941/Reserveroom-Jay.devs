import axios from "axios";
import {AuthenticationEndpoints} from "../../../shared/constants/urls";

class LoginService {

    loggedIn = (username: string, password: string) => {
        return axios.post(AuthenticationEndpoints.GET_TOKEN_URL, {username: username, password: password});
    };
}

export const loginService = new LoginService();
