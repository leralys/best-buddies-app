import { fetchLocations } from './fetchLocations';
import { fetchPark } from './fetchPark';
import { isLoggedIn } from './isLoggedIn';
import { fetchChekins } from './fetchCheckins';
import { clearCurrPark } from './clearCurrPark';
import { fetchFavorites } from './fetchFavorites';

const allActions = {
    fetchLocations,
    fetchPark,
    isLoggedIn,
    fetchChekins,
    clearCurrPark,
    fetchFavorites
}

export default allActions;