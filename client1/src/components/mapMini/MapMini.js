import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { url } from '../../utilities/url';
import './MapMini.css';

const MapMini = () => {
    const park = useSelector(state => state.park.park[0]);
    return (
        <Link to={'/'}>
            <Button>
                <img className='MapMini'
                    src={`${url}/static/minimaps/${park.location_id}.png`}
                    alt={park.address}
                />
            </Button>
        </Link>

    )
}
export default MapMini;