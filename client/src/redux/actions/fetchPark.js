import axios from 'axios';
import {
    fetchPark_pending,
    fetchPark_success,
    fetchPark_error
} from '../constants/constants.js';
import { url } from '../../utilities/url';


export const fetchPark = id => async (dispatch) => {
    dispatch({ type: fetchPark_pending });
    try {
        const res = await axios.get(`${url}/api/locations/spot/${id}`);
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
