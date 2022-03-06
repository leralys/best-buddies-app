import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions/index';
import verify from '../../services/verify';
import { AppBar, Toolbar, Button, Avatar } from '@mui/material';
import { url } from '../../utilities/url';
import Search from '../search/Search';
import './nav.scss';

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
    const handleClick = () => {
        window.scrollTo(0, 0);
        dispatch(actions.clearCurrPark());
    }
    return (
        <AppBar className='navbar-container'>
            <Toolbar className='navbar'>
                <Link className='navbar-link logo' to={`/`}
                    onMouseDown={handleClick}>
                    Best Buddies
                </Link>
                <div className='navbar-search-container'>
                    <Search id='navbar-search' />
                    {isLoggedIn
                        ? <Button component={Link} className='navbar-link' to={'/mypage'}>
                            <Avatar alt='Cute dog avatar' src={`${url}/static/avatars/${avatar}.jpeg`} />
                        </Button>
                        : <Button component={Link} className='navbar-link' to={'/login'}>Sign In</Button>
                    }
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Nav;