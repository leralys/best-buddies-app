import { fetchLocations } from './fetchLocations';
import { fetchPark } from './fetchPark';
import { isLoggedIn } from './isLoggedIn';
import { fetchChekins } from './fetchCheckins';
import { clearCurrPark } from './clearCurrPark';

const allActions = {
    fetchLocations,
    fetchPark,
    isLoggedIn,
    fetchChekins,
    clearCurrPark
}

export default allActions;