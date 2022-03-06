import axios from 'axios';
import {
    fetchFavorites_pending,
    fetchFavorites_success,
    fetchFavorites_error
} from '../constants/constants.js';
import { url } from '../../utilities/url';

export const fetchFavorites = username => async (dispatch) => {
    dispatch({ type: fetchFavorites_pending });
    try {
        const res = await axios.get(`${url}/favorites/?username=${username}`);
        dispatch({
            type: fetchFavorites_success,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: fetchFavorites_error,
            payload: err
        })
    }
}
