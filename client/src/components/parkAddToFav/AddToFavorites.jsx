import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions/index';
import axios from 'axios';
import { url } from '../../utilities/url';
import { toast } from 'react-toastify';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton, Box, Button } from '@mui/material';
import findId from '../../utilities/findId';
import './addToFavorites.scss';


const AddToFavorites = () => {
    let id = useParams().locationId;
    const dispatch = useDispatch();
    const username = useSelector(state => state.loggedIn.username);
    const park = useSelector(state => state.park.park[0]);
    const favorites = useSelector(state => state.favorites.favorites);
    const deleteFav = async () => {
        try {
            await axios.delete(`${url}/favorites/delete`, {
                data: { locationId: id, username: username }
            });
            dispatch(actions.fetchFavorites(username));
        } catch (e) {
            toast.error('Sorry, service unavailable now', {
                icon: '😞'
            });
        }
    }
    const addToFav = async () => {
        try {
            await axios.post(`${url}/favorites/new`, {
                locationId: id, username: username
            });
            dispatch(actions.fetchFavorites(username));
        } catch (e) {
            toast.error('Sorry, service unavailable now', {
                icon: '😞'
            });
        }
    }
    return (
        <>
            <Box sx={{ display: 'inline-flex', mt: 1 }} className='addtofav-container'>
                {findId(park.location_id, favorites)
                    ? <Button id='addtofav-button'
                        onClick={deleteFav}>
                        <IconButton aria-label='add to favorites' component='span'>
                            <FavoriteIcon className='red' />
                        </IconButton>
                        Delete from favorites
                    </Button>
                    : <Button id='addtofav-button'
                        onClick={addToFav}>
                        <IconButton aria-label='add to favorites' component='span'>
                            <FavoriteBorderIcon className='red' />
                        </IconButton>
                        Add to Favorites
                    </Button>
                }
            </Box>
        </>

    );
}

export default AddToFavorites;