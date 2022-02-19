import { setViewState } from '../constants/constants';

const defaultMapState = {
    mapStyle: 'mapbox://styles/mapbox/streets-v9',
    viewState: {
        longitude: 34.7750069,
        latitude: 32.0751963659,
        zoom: 12
    }
}

export const mapStateReducer = (state = defaultMapState, action = {}) => {
    switch (action.type) {
        case setViewState:
            return { ...state, viewState: action.payload };
        default:
            return { ...state };
    }
}