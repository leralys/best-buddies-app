import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { url } from '../../utilities/url';
import './mapMini.scss';

const MapMini = () => {
    const park = useSelector(state => state.park.park[0]);
    return (
        <Link to={'/map'}>
            <Button>
                <img className='map-mini'
                    src={`${url}/static/minimaps/${park.location_id}.png`}
                    alt={park.address} />
            </Button>
        </Link>
    )
}
export default MapMini;