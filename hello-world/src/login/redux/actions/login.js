import {LOGIN} from '../constants';

export const login = (userName, password) => ({
    type: LOGIN,
    user: {
        userName,
        password
    }
})
