import axios from 'axios';
import {
    // clearSearch,
    changeSearchText,
    fetchLocations_pending,
    fetchLocations_success,
    fetchLocations_error
} from '../constants/constants.js';


export const fetchLocations = () => async (dispatch) => {
    dispatch({ type: fetchLocations_pending });
    try {
        const res = await axios.get(`http://localhost:8080/api/locations/`);
        dispatch({
            type: fetchLocations_success,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: fetchLocations_error,
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