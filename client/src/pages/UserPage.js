import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import actions from '../redux/actions/index';
import Nav from '../components/Nav';
import UserPersonal from '../components/UserPersonal';
import UserFavorites from '../components/UserFavorites';

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
            <main className='page' style={{ width: '90vw', margin: '3rem auto 1rem' }}>
                {isLoggedIn &&
                    <h2 className='page-header'>Hi, {username}</h2>
                }
                <div className='row' style={{ width: '60vw', justifyContent: 'space-between' }}>
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