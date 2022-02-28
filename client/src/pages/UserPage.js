import { useSelector, useDispatch } from 'react-redux';
import actions from '../redux/actions/index';
import Nav from '../components/Nav';
import UserPersonal from '../components/UserPersonal';
import UserFavorites from '../components/UserFavorites';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../utilities/url';

const UserPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.loggedIn.loggedIn);
    const username = useSelector(state => state.loggedIn.username);
    const favorites = useSelector(state => state.favorites.favorites);
    useEffect(() => {
        // const authenticate = async () => {
        //     try {
        //         const res = await axios.get(`${url}/users/token`, {
        //             withCredentials: true,
        //             headers: {
        //                 'Access-Control-Allow-Origin': '*',
        //                 'Content-Type': 'application/json'
        //             }
        //         });
        //         console.log(res.data);
        //     } catch (e) {
        //         navigate('/login');
        //     }
        // }
        // authenticate();
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