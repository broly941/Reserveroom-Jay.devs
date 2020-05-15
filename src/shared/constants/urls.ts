export enum AuthenticationEndpoints {
    GET_TOKEN_URL = 'http://localhost:8080/api/authenticate',
}

export enum BookingEndpoints {
    LOAD_BOOKING = 'http://localhost:8080/api/events/byName/{username}',
}

export enum PeopleEndpoints {
    LOAD_PEOPLE = 'http://localhost:8080/api/users',
    LOAD_USER_INFO = 'http://localhost:8080/api/users/userinfo/{username}',
}

export enum ReserveroomEndpoints {
    LOAD_ROOMS = 'http://localhost:8080/api/rooms',
}

export enum WebLinks {
    LINKEDIN_PROFILE = 'https://www.linkedin.com/in/ilya-korzhavin-33a1ab17b/',
}