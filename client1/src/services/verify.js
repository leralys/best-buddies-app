import axios from 'axios';
import { url } from '../utilities/url';

const verify = async () => {
    try {
        const res = await axios.get(`${url}/users/token`, {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        });
        return [res.data.username, res.data.avatar];
    } catch (err) {
        throw err;
    }
}

export default verify;