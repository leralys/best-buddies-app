import axios from 'axios';
import {
    fetchCheckedIn_pending,
    fetchCheckedIn_success,
    fetchCheckedIn_error
} from '../constants/constants.js';
import { url } from '../../utilities/url';


export const fetchChekins = id => async (dispatch) => {
    dispatch({ type: fetchCheckedIn_pending });
    try {
        const res = await axios.get(`${url}/checkins/users?locationId=${id}`);
        dispatch({
            type: fetchCheckedIn_success,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: fetchCheckedIn_error,
            payload: err
        })
    }
}
