import {
    fetchPark_pending,
    fetchPark_success,
    fetchPark_error
} from '../constants/constants.js';

const initState = {
    loading: false,
    park: [],
    error: ''
}

export const getParkReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case fetchPark_pending:
            return {
                ...state,
                loading: true
            }
        case fetchPark_success:
            return {
                ...state,
                loading: false,
                park: action.payload.locations
            }
        case fetchPark_error:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}