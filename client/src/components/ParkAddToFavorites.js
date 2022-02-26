import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import actions from '../redux/actions';
import { IconButton, Box, Button } from '@mui/material';


const ParkAddToFavorites = () => {
    let id = useParams().locationId;
    const username = useSelector(state => state.loggedIn.username);
    const addToFavorites = () => {
        console.log(username);
        console.log(id);
    }
    return (
        <Box sx={{ display: 'inline-flex', mt: 2 }}>
            <Button style={{ color: 'var(--color-dark-grey)' }}
                onClick={addToFavorites}>
                <IconButton aria-label='add to favorites' component='span'>
                    <FavoriteBorderIcon style={{ color: 'var(--color-map-red)' }} />
                </IconButton>
                Add to Favorites
            </Button>
        </Box>
    );
}

export default ParkAddToFavorites;