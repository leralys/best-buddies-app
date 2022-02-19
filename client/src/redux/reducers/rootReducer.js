import { combineReducers } from 'redux';
import { locationsReducer } from './locationsReducer';
import { mapStateReducer } from './mapStateReducer';

export default combineReducers({
    locations: locationsReducer,
    map: mapStateReducer
});