import MapComponent from '../components/MapComponent';
import Search from '../components/Search';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import actions from '../redux/actions/index';
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchLocations());
    }, [dispatch]);
    return <div>
        <>
            <Search id='Home-search' />
            <MapComponent />
        </>
    </div>
}

export default Home;