import {
    fetchFavorites_pending,
    fetchFavorites_success,
    fetchFavorites_error
} from '../constants/constants.js';

const initState = {
    loading: false,
    favorites: [],
    error: ''
}

export const favoritesReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case fetchFavorites_pending:
            return {
                ...state,
                loading: true
            }
        case fetchFavorites_success:
            return {
                ...state,
                loading: false,
                favorites: action.payload.favorites
            }
        case fetchFavorites_error:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}