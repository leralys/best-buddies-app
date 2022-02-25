import { fetchLocations } from './fetchLocations';
import { fetchPark } from './fetchPark';
import { isLoggedIn } from './isLoggedIn';
import { fetchChekins } from './fetchCheckins';

const allActions = {
    fetchLocations,
    fetchPark,
    isLoggedIn,
    fetchChekins
}

export default allActions;