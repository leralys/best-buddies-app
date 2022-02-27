import { useSelector, useDispatch } from 'react-redux';
import actions from '../redux/actions/index';
import axios from 'axios';
import { url } from '../utilities/url';
import findId from '../utilities/findId';
import { Button, Typography, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom';
import UserFavoritesModal from './UserFavoritesModal';
import { toast } from 'react-toastify';

const UserFavorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favorites);
    const locations = useSelector(state => state.locations.locations);
    const username = useSelector(state => state.loggedIn.username);
    const n = 4;
    // const findAdr = loc_id => {
    //     return (locations.find(el => el.location_id === loc_id));
    // }
    const deleteFav = async (locationId) => {
        try {
            await axios.delete(`${url}/favorites/delete`, {
                data: { locationId: locationId, username: username }
            });
            dispatch(actions.fetchFavorites(username));
        } catch (e) {
            toast.error('Sorry, service unavailable now', {
                icon: '😞'
            });
        }
    }
    const alert = (locationId) => {
        toast(
            (<div className='col'
                style={{ alignItems: 'center' }}>
                Are you sure?
                <Button
                    variant='outlined'
                    color='error'
                    size='small'
                    onMouseDown={() => deleteFav(locationId)}
                    sx={{ mt: 2 }}
                >
                    Delete
                </Button>
            </div>),
            {
                autoClose: false,
                draggable: false
            });
    }
    return (
        <section className='col'>
            {favorites.length === 0
                ? <div>
                    <Typography variant='h5' className='page-header'>No favorite parks yet :(</Typography>
                    <Typography variant='h5' className='page-header'>Start from searching for some parks in your city</Typography>
                </div>
                : <>
                    <h2 className='page-header'>Favorite parks:</h2>
                    <div>
                        <ul style={{ width: '30vw' }}>
                            {favorites.slice(0, n).map(el => {
                                return (
                                    <li key={el.id} className='row'
                                        style={{ listStyle: 'none', justifyContent: 'space-between' }}>
                                        <Button component={Link} to={`/locations/${el.location_id}`}>
                                            {findId(el.location_id, locations).address}, {findId(el.location_id, locations).city}
                                        </Button>
                                        <IconButton
                                            onClick={() => alert(el.location_id)}
                                            aria-label='delete from favorites'
                                            component='span'
                                            sx={{ ml: 1 }}>
                                            <HighlightOffIcon style={{ color: 'var(--color-map-red)' }} />
                                        </IconButton>
                                    </li>
                                )
                            })
                            }
                        </ul>
                        {favorites.length > 4 &&
                            <>
                                <Typography>
                                    ... and {favorites.length - n} more
                                </Typography>
                                <UserFavoritesModal n={n} />
                            </>
                        }
                    </div>
                </>
            }

        </section>
    );
}

export default UserFavorites;