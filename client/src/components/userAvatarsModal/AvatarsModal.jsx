import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import actions from '../../redux/actions/index';
import { Box, Button, Modal, Avatar, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { url } from '../../utilities/url';
import { toast } from 'react-toastify';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '600px',
    maxHeight: '50vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
    display: 'flex',
    justifyContent: 'center'
};

const AvatarsModal = (props) => {
    const dispatch = useDispatch();
    const username = useSelector(state => state.loggedIn.username);
    const isLoggedIn = useSelector(state => state.loggedIn.loggedIn);
    const n = 25;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const changeAvatar = async (id) => {
        try {
            await axios.patch(`${url}/users/avatar`, {
                avatar: id
            }, {
                withCredentials: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            dispatch(actions.isLoggedIn({ status: isLoggedIn, username: username, avatar: id }));
        } catch (e) {
            toast.error('Sorry, service unavailable now', {
                icon: '😞'
            });
        }
        handleClose();
    }
    const list = [...Array(n)].map((elem, i) => {
        return (
            <IconButton key={i} onClick={() => changeAvatar(i + 1)}>
                <Avatar alt='Cute dog avatar'
                    src={`${url}/static/avatars/${i + 1}.jpeg`}
                    style={{ width: '70px', height: '70px' }}
                />
            </IconButton >
        );
    });
    return (
        <div>
            <Box sx={{ display: 'inline-flex', mt: 2 }}>
                <Button
                    onClick={handleOpen}
                    variant='text'
                    style={{ color: 'var(--color-dark-grey)' }}
                    sx={{ display: 'inline-flex', mt: 2 }}
                >
                    <IconButton aria-label='log out' component='span'>
                        <AccountCircleIcon />
                    </IconButton>
                    Change avatar
                </Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <ul>
                        {list}
                    </ul>
                </Box>
            </Modal>
        </div>
    );
}

export default AvatarsModal;