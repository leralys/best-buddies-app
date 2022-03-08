import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import AddToFavorites from '../parkAddToFav/AddToFavorites';
import MapMini from '../mapMini/MapMini';
import axios from 'axios';
import actions from '../../redux/actions/index';
import { url } from '../../utilities/url';
import { toast } from 'react-toastify';
import './parkInfo.scss';

//a component that contains mini map component, rating& hours, check-in button , add to fav component 

const ParkInfo = () => {
    const dispatch = useDispatch();
    const park = useSelector(state => state.park.park[0]);
    const isLoggedIn = useSelector(state => state.loggedIn.loggedIn);
    const username = useSelector(state => state.loggedIn.username);
    const favorites = useSelector(state => state.favorites.favorites);
    const rate = [...Array(park.rate)].map((elem, i) => {
        return <StarIcon key={i} style={{ color: '#faaf00' }} />
    });
    useEffect(() => {
        dispatch(actions.fetchFavorites(username));
    }, [isLoggedIn, dispatch, username]);
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
        <div className='park-info'>
            <h2 className='header'>{park.address}, {park.city}</h2>
            <div>
                <div className='left-page-container'>
                    <MapMini />
                    {isLoggedIn && favorites &&
                        <AddToFavorites />
                    }
                </div>
                <div className='additional-container'>
                    <div>
                        Rating:
                        <div className='rating'>
                            {rate}
                        </div>
                        Open hours:
                        {park.hours.map((el, i) => {
                            return <div key={i} style={{ marginTop: '0.5rem' }}>{el}</div>
                        })}
                    </div>
                    {isLoggedIn &&
                        <Button variant='contained'
                            className='red-button'
                            onClick={checkin}
                            sx={{ mb: 2 }}>
                            Check In
                        </Button>
                    }
                </div>
            </div>

        </div>
    );
}

export default ParkInfo;