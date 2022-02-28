import { useSelector, useDispatch } from 'react-redux';
import actions from '../redux/actions/index';
import Nav from '../components/Nav';
import UserPersonal from '../components/UserPersonal';
import UserFavorites from '../components/UserFavorites';
import { useEffect } from 'react';

const UserPage = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.loggedIn.loggedIn);
    const username = useSelector(state => state.loggedIn.username);
    const favorites = useSelector(state => state.favorites.favorites);
    useEffect(() => {
        dispatch(actions.fetchFavorites(username));
    }, [isLoggedIn, dispatch, username]);
    return (
        <>
            <Nav />
            <main className='page' id='User-page' style={{ width: '90vw', margin: '3rem auto 1rem' }}>
                {isLoggedIn &&
                    <h2 className='page-header'>Hi, {username}</h2>
                }
                <div className='row User-info'>
                    {isLoggedIn &&
                        <UserPersonal />
                    }
                    {favorites && isLoggedIn &&
                        <UserFavorites />
                    }
                </div>
            </main>
        </>

    );
}

export default UserPage;