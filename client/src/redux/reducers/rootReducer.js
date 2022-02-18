import { combineReducers } from 'redux';
import { getAddresses } from './getAddressesReducer';

export default combineReducers({
    search: getAddresses
});