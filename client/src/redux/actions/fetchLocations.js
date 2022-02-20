import axios from 'axios';
import {
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
            payload: err
        })
    }
}
