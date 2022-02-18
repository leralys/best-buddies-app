import axios from 'axios';
import {
    // clearSearch,
    changeSearchText,
    getAddresses_pending,
    getAddresses_success,
    getAddresses_error
} from '../constants/constants.js';

export const getAddresses = () => async (dispatch) => {
    dispatch({ type: getAddresses_pending });
    try {
        const res = await axios.get(`http://localhost:8080/api/locations/`);
        dispatch({
            type: getAddresses_success,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: getAddresses_error,
            payload: console.log(err)
        })
    }
}

// export const clearSearchField = () => {
//     return {
//         type: clearSearch
//     }
// }

export const changeSearch = text => {
    return {
        type: changeSearchText,
        payload: text
    }
}