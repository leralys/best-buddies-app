import {
    getAllLocations_pending,
    getAllLocations_success,
    getAllLocations_error
} from '../constants/constants.js';

const initState = {
    loading: false,
    cities: undefined,
    error: ''
}

export const initialReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case getAllLocations_pending:
            return {
                ...state,
                loading: true
            }
        case getAllLocations_success:
            return {
                ...state,
                loading: false,
                cities: action.payload
            }
        case getAllLocations_error:
            return {
                ...state,
                loading: false
            }
        default:
            return { ...state }
    }
}