import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/actions/index';
// import axios from 'axios';
import verify from '../services/verify';
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Avatar
} from '@mui/material';
import Search from './Search';
import randomNum from '../utilities/randomNum';
// import { url } from '../utilities/url';

const Nav = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.loggedIn.loggedIn);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffect(() => {
    //     // const verify = async () => {
    //     //     try {
    //     //         await axios.get(`${url}/token`, {
    //     //             withCredentials: true,
    //     //             headers: {
    //     //                 'Access-Control-Allow-Origin': '*',
    //     //                 'Content-Type': 'application/json'
    //     //             }
    //     //         });
    //     //         setIsLoggedIn(true);
    //     //     } catch (e) {
    //     //         setIsLoggedIn(false);
    //     //     }
    //     // }
    //     verify()
    //         .then(res => setIsLoggedIn(true))
    //         .catch(err => setIsLoggedIn(false))
    // }, []);
    useEffect(() => {
        verify()
            .then(res => {
                dispatch(actions.isLoggedIn({ status: true, username: res }));
            })
            .catch(err => {
                dispatch(actions.isLoggedIn({ status: false, username: '' }));
            })
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' style={{ backgroundColor: 'var(--color-green)' }}>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1, pl: '2rem' }}>
                        <Link className='Nav-link' to={`/`}>Best Buddies</Link>
                    </Typography>
                    <Search />
                    {isLoggedIn
                        ? <Button component={Link} className='Nav-link' to={'/mypage'}>
                            <Avatar alt='Random dog avatar' src={`http://localhost:8080/static/avatars/${randomNum()}.jpeg`} />
                        </Button>
                        : <Button component={Link} className='Nav-link' to={'/login'}>Sign In</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Nav;