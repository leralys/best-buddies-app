import {
    Box, Button, Modal, IconButton
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import actions from '../redux/actions/index';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { url } from '../utilities/url';
import findId from '../utilities/findId';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll'
};

const ChechedInModal = (props) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favorites);
    const locations = useSelector(state => state.locations.locations);
    const username = useSelector(state => state.loggedIn.username);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
        <div>
            <Button onClick={handleOpen}
                sx={{ mt: 5 }}>
                See all
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    {favorites.map(el => {
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
                </Box>
            </Modal>
        </div>
    );
}

export default ChechedInModal;