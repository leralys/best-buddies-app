import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/actions/index';
import verify from '../services/verify';
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Avatar
} from '@mui/material';
import { url } from '../utilities/url';
import Search from './Search';
import './Nav.css';

const Nav = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.loggedIn.loggedIn);
    const avatar = useSelector(state => state.loggedIn.avatar);
    useEffect(() => {
        verify()
            .then(res => {
                dispatch(actions.isLoggedIn({ status: true, username: res[0], avatar: res[1] }));
            })
            .catch(err => {
                dispatch(actions.isLoggedIn({ status: false, username: '', avatar: '' }));
            });
    }, [dispatch]);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' style={{ background: 'var(--color-green)' }}>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1, pl: '2rem' }}>
                        <Link className='Nav-link' to={`/`} id='hideOnSmall'
                            onMouseDown={() => dispatch(actions.clearCurrPark())}>
                            Best Buddies
                        </Link>
                        <Link className='Nav-link' to={`/`} id='showOnSmall'
                            onMouseDown={() => dispatch(actions.clearCurrPark())}>
                            BB
                        </Link>
                    </Typography>
                    <Search id='Nav-search' />
                    {isLoggedIn
                        ? <Button component={Link} className='Nav-link' to={'/mypage'}>
                            <Avatar alt='Cute dog avatar' src={`${url}/static/avatars/${avatar}.jpeg`} />
                        </Button>
                        : <Button component={Link} className='Nav-link' to={'/login'}>Sign In</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Nav;