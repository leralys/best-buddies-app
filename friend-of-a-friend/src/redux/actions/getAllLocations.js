import axios from 'axios';
import {
    getAllLocations_pending,
    getAllLocations_success,
    getAllLocations_error
} from '../constants/constants.js';

const fetchAllLocations = () => async (dispatch, getState) => {
    dispatch({ type: getAllLocations_pending });
    try {
        const res = await axios.get(`http://localhost:8080/api/locations`);
        dispatch({
            type: getAllLocations_success,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: getAllLocations_error,
            payload: console.log(err)
        })
    }
}

export default fetchAllLocations;