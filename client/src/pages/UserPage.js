import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import actions from '../redux/actions/index';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Box, Button } from '@mui/material';
import Nav from '../components/Nav';
import { toast } from 'react-toastify';
import { url } from '../utilities/url';
import randomNum from '../utilities/randomNum';
// import verify from '../services/verify';

const UserPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [username, setUsername] = useState('');
    const username = useSelector(state => state.loggedIn.username);
    // useEffect(() => {
    // const verify = async () => {
    //     try {
    //         const res = await axios.get(`${url}/token`, {
    //             withCredentials: true,
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //         setIsLoggedIn(true);
    //         setUsername(res.data.username);
    //     } catch (e) {
    //         setIsLoggedIn(false);
    //     }
    // }
    // verify();
    // verify()
    //     .then(res => {
    //         dispatch(actions.isLoggedIn({ status: true, username: res }));
    // setIsLoggedIn(true)
    // setUsername(res)
    // })
    // .catch(err => {
    // setIsLoggedIn(false)
    // dispatch(actions.isLoggedIn({ status: false, username: '' }));
    //         })
    // }, []);
    const logout = async () => {
        try {
            await axios.delete(`${url}/users/logout`, {
                withCredentials: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
            navigate('/');
        } catch (e) {
            console.log(e);
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
            navigate('/');
        } catch (e) {
            navigate('/');
        }
    }
    const alert = () => {
        toast(
            (<div className='col'
                style={{ alignItems: 'center' }}>
                Are you sure? 😥
                <Button
                    variant="outlined"
                    color="error"
                    size="small"
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
        <>
            <Nav />
            <main className='page' style={{ width: '90vw', margin: '3rem auto 1rem' }}>
                <h2 className='page-header'>Hi, {username}</h2>
                <div className='row' style={{ justifyContent: 'space-between' }}>
                    <section className='col' style={{ maxWidth: '300px' }}>
                        <img style={{ border: '1px solid var(--color-light-grey' }}
                            src={`http://localhost:8080/static/avatars/${randomNum()}.jpeg`}
                            alt='Cute dog avatar'
                        />
                        <Box sx={{ display: 'inline-flex', mt: 2 }} >
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
                    <section className='col'>
                        <h2 className='page-header'>Favorite parks</h2>
                        <ul>
                            <li>Address_1</li>
                            <li>Address_2</li>
                            <li>Address_3</li>
                            <li>Address_4</li>
                        </ul>
                    </section>
                </div>
            </main>
        </>

    );
}

export default UserPage;