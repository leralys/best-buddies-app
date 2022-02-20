import {
    fetchLocations_pending,
    fetchLocations_success,
    fetchLocations_error
} from '../constants/constants.js';

const initState = {
    searchText: '',
    loading: false,
    locations: undefined,
    error: ''
}

export const locationsReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case fetchLocations_pending:
            return {
                ...state,
                loading: true
            }
        case fetchLocations_success:
            return {
                ...state,
                loading: false,
                locations: action.payload.locations
            }
        case fetchLocations_error:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}