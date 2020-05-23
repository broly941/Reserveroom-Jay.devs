import axios from "axios";

const GET_TOKEN_URL = 'http://localhost:8080/api/authenticate';

class LoginService {
    loggedIn = (username: string, password: string) => {
        return axios.post(GET_TOKEN_URL, {username: username, password: password});
    };
}

export const loginService = new LoginService();
