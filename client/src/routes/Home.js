import MapComponent from '../components/MapComponent';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import actions from '../redux/actions/index';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchLocations());
    }, [dispatch]);
    return <div>
        <>
            <h1>HOME</h1>
            <MapComponent />
        </>
    </div>
}

export default Home;