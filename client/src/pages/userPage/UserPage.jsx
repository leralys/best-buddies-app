import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions/index';
import Nav from '../../components/nav/Nav';
import Personal from '../../components/userPersonal/Personal';
import Favorites from '../../components/userFavorites/Favorites';

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
            <main className='page'>
                <section className='row-container'>
                    <div className='left' style={{ flex: '0' }}>
                        {isLoggedIn &&
                            <Personal />
                        }
                    </div>
                    <div className='right' style={{ flex: '0' }}>
                        {favorites && isLoggedIn &&
                            <Favorites />
                        }
                    </div>
                </section>
            </main>
        </>

    );
}

export default UserPage;