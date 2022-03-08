import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions/index';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Box, Button } from '@mui/material';
import { toast } from 'react-toastify';
import { url } from '../../utilities/url';
import AvatarsModal from '../userAvatarsModal/AvatarsModal';
import './personal.scss';

const Personal = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.loggedIn.loggedIn);
    const username = useSelector(state => state.loggedIn.username);
    const avatar = useSelector(state => state.loggedIn.avatar);
    const logout = async () => {
        localStorage.removeItem('accessToken');
        try {
            await axios.delete(`${url}/users/logout`, {
                withCredentials: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
        } catch (e) {
            console.log(e);
        }
        dispatch(actions.isLoggedIn({ status: false, username: '', avatar: '' }));
        dispatch(actions.clearCurrPark());
        navigate('/');
    }
    const deleteAcc = async () => {
        try {
            await axios.delete(`${url}/users/delete`, {
                withCredentials: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
        } catch (e) {
            console.log(e);
        }
        localStorage.removeItem('accessToken');
        dispatch(actions.isLoggedIn({ status: false, username: '', avatar: '' }));
        dispatch(actions.clearCurrPark());
        navigate('/');
    }
    const alert = () => {
        toast(
            (<div className='col'>
                Are you sure? 😥
                <Button
                    variant='outlined'
                    color='error'
                    size='small'
                    onMouseDown={deleteAcc}
                    sx={{ mt: 2 }}>
                    Delete
                </Button>
            </div>),
            {
                autoClose: false,
                draggable: false
            });
    }
    return (
        <div className='user-personal'>
            {isLoggedIn &&
                <h2 className='header'>Hi, {username}</h2>
            }
            <div className='left-page-container'>
                {isLoggedIn &&
                    < img src={`${url}/static/avatars/${avatar}.jpeg`}
                        alt='Cute dog avatar' />
                }
            </div>
            <div className='controls'>
                <AvatarsModal />
                <Box sx={{ display: 'inline-flex' }} >
                    <Button
                        onClick={logout}
                        variant='text'
                        style={{ color: '#252525' }}
                        sx={{ display: 'inline-flex', mt: 1 }}>
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
                        className='grey'
                        sx={{ display: 'inline-flex', mt: 1 }}
                        style={{ color: '#252525' }}>
                        <IconButton aria-label='delete account' component='span'>
                            <HighlightOffIcon className='red' />
                        </IconButton>
                        Delete account
                    </Button>
                </Box>
            </div>
        </div >
    );
}

export default Personal;