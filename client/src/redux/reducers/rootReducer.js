import { combineReducers } from 'redux';
import { locationsReducer } from './locationsReducer';
import { getParkReducer } from './getParkReducer';

export default combineReducers({
    locations: locationsReducer,
    park: getParkReducer
});