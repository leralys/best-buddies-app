import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { url } from '../utilities/url';

const verify = async () => {
    const exp = (jwt_decode(localStorage.getItem('accessToken'))).exp * 1000;
    const now = new Date();
    if (now > exp) {
        localStorage.removeItem('accessToken');
        return;
    }
    try {
        const res = await axios.get(`${url}/users/token`, {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        return [res.data.username, res.data.avatar];
    } catch (err) {
        throw err;
    }
}

export default verify;