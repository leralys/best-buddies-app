import { setLoggedIn } from '../constants/constants';

const initialState = {
    loggedIn: false,
    username: ''
}

export const loggedInReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case setLoggedIn:
            return {
                ...state,
                loggedIn: action.payload.status,
                username: action.payload.username
            }
        default:
            return { ...state }
    }
}