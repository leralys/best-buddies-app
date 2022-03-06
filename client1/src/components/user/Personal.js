import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions/index';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Box, Button } from '@mui/material';
import { toast } from 'react-toastify';
import { url } from '../../utilities/url';
import AvatarsModal from './AvatarsModal.js';

const Personal = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.loggedIn.loggedIn);
    const avatar = useSelector(state => state.loggedIn.avatar);
    const logout = async () => {
        try {
            await axios.delete(`${url}/users/logout`, {
                withCredentials: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
            dispatch(actions.isLoggedIn({ status: false, username: '', avatar: '' }));
            dispatch(actions.clearCurrPark());
            navigate('/');
        } catch (e) {
            dispatch(actions.clearCurrPark());
            navigate('/');
        }
    }
    const deleteAcc = async () => {
        try {
            await axios.delete(`${url}/users/delete`, {
                withCredentials: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
            dispatch(actions.clearCurrPark());
            navigate('/');
        } catch (e) {
            dispatch(actions.clearCurrPark());
            navigate('/');
        }
    }
    const alert = () => {
        toast(
            (<div className='col'
                style={{ alignItems: 'center' }}>
                Are you sure? 😥
                <Button
                    variant='outlined'
                    color='error'
                    size='small'
                    onMouseDown={deleteAcc}
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
        <section className='col User-personal' style={{ maxWidth: '300px' }}>
            {isLoggedIn &&
                <img style={{ border: '1px solid var(--color-light-grey', marginLeft: '0.5rem' }}
                    src={`${url}/static/avatars/${avatar}.jpeg`}
                    alt='Cute dog avatar'
                />
            }
            <AvatarsModal />
            <Box sx={{ display: 'inline-flex' }} >
                <Button
                    onClick={logout}
                    variant='text'
                    style={{ color: 'var(--color-dark-grey)' }}
                    sx={{ display: 'inline-flex', mt: 2 }}
                >
                    <IconButton aria-label='log out' component='span'>
                        <LogoutIcon />
                    </IconButton>
                    Log out
                </Button>
            </Box>
            <Box sx={{ display: 'inline-flex' }}>
                <Button
                    onClick={alert}
                    variant='text'
                    style={{ color: 'var(--color-map-red)' }}
                    sx={{ display: 'inline-flex', mt: 2 }}
                >
                    <IconButton aria-label='delete account' component='span'>
                        <HighlightOffIcon style={{ color: 'var(--color-map-red)' }} />
                    </IconButton>
                    Delete account
                </Button>
            </Box>
        </section>
    );
}

export default Personal;