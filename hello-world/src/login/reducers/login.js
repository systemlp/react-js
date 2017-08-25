import {LOGIN} from '../constants'

export const login = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.user;
        default:
            state;
    }
}
