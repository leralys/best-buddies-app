import { useDispatch, useSelector } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import '../pages/ParkPageStyles.css';
import PetsIcon from '@mui/icons-material/Pets';
import ParkAddToFavorites from './ParkAddToFavorites';
import axios from 'axios';
import actions from '../redux/actions/index';
import { url } from '../utilities/url';
import { toast } from 'react-toastify';


const ParkDetailes = () => {
    const dispatch = useDispatch();
    const park = useSelector(state => state.park.park[0]);
    const isLoggedIn = useSelector(state => state.loggedIn.loggedIn);
    const username = useSelector(state => state.loggedIn.username);
    const rate = [...Array(park.rate)].map((elem, i) => {
        return <StarIcon key={i} style={{ color: 'var(--color-yelow)' }} />
    });
    const checkin = async () => {
        try {
            const res = await axios.post(`${url}/checkins/new`, {
                username: username,
                locationId: park.location_id
            });
            toast.success(res.data.msg + '!', {
                icon: '🐾'
            });
            dispatch(actions.fetchChekins(park.location_id));
        } catch (err) {
            toast.error('Sorry, service unavailable now', {
                icon: '😞'
            });
        }
    }
    return (
        <>
            <div className='row' style={{ width: '60vw' }}>
                <div className='col' style={{ marginRight: '2rem' }}>
                    <div style={{ background: 'var(--color-green)', width: '300px', height: '300px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {park.address}
                        <PetsIcon className='marker-icon' style={{ color: 'var(--color-map-red)' }} />
                    </div>
                </div>
                <div className='col' style={{ marginTop: '1rem', justifyContent: 'space-between' }}>
                    <div className='col'>
                        Rating:
                        <div className='row' style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                            {rate}
                        </div>
                        Open hours:
                        {park.hours.map((el, i) => {
                            return <div key={i} style={{ marginTop: '0.5rem' }}>{el}</div>
                        })}
                    </div>
                    {isLoggedIn &&
                        <Button variant='contained'
                            onClick={checkin}
                            sx={{ mb: 2 }}
                            style={{ background: 'var(--color-map-red)' }}>
                            Check In
                        </Button>
                    }
                </div>
            </div>
            <ParkAddToFavorites />
        </>
    );
}

export default ParkDetailes;