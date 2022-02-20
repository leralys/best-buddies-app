import axios from 'axios';
import {
    fetchPark_pending,
    fetchPark_success,
    fetchPark_error
} from '../constants/constants.js';


export const fetchPark = id => async (dispatch) => {
    dispatch({ type: fetchPark_pending });
    try {
        const res = await axios.get(`http://localhost:8080/api/locations/spot/${id}`);
        dispatch({
            type: fetchPark_success,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: fetchPark_error,
            payload: err
        })
    }
}
