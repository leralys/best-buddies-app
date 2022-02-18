import {
    clearSearch,
    changeSearchText,
    getAddresses_pending,
    getAddresses_success,
    getAddresses_error
} from '../constants/constants.js';

const initState = {
    searchText: '',
    loading: false,
    addresses: undefined,
    error: ''
}

export const getAddresses = (state = initState, action = {}) => {
    switch (action.type) {
        case clearSearch:
            return {
                ...state,
                addresses: undefined,
                loading: false,
                error: ''
            }
        case changeSearchText:
            return {
                ...state,
                loading: false,
                searchText: action.payload
            }
        case getAddresses_pending:
            return {
                ...state,
                loading: true
            }
        case getAddresses_success:
            return {
                ...state,
                loading: false,
                addresses: action.payload.locations
            }
        case getAddresses_error:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}