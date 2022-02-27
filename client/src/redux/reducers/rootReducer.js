import { combineReducers } from 'redux';
import { locationsReducer } from './locationsReducer';
import { getParkReducer } from './getParkReducer';
import { loggedInReducer } from './loggedInReducer';
import { checkinsReducer } from './checkinsReducer';
import { favoritesReducer } from './favoritesReducer';

export default combineReducers({
    locations: locationsReducer,
    park: getParkReducer,
    loggedIn: loggedInReducer,
    checkedIn: checkinsReducer,
    favorites: favoritesReducer
});