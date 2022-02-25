import { setLoggedIn } from '../constants/constants';

export const isLoggedIn = (obj) => {
    return {
        type: setLoggedIn,
        payload: obj
    }
}