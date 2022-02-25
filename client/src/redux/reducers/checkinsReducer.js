import {
    fetchCheckedIn_pending,
    fetchCheckedIn_success,
    fetchCheckedIn_error
} from '../constants/constants.js';

const initState = {
    loading: false,
    checkedIn: [],
    error: ''
}

export const checkinsReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case fetchCheckedIn_pending:
            return {
                ...state,
                loading: true
            }
        case fetchCheckedIn_success:
            return {
                ...state,
                loading: false,
                checkedIn: action.payload.users
            }
        case fetchCheckedIn_error:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}