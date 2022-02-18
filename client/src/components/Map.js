import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
// const API_KEY = process.env.REACT_APP_API_KEY;
import './Map.css';


const Map = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const coords = {
        lat: 32.109333,
        lng: 34.855499
    };
    return <div className='Map-container'>
        <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={coords}
            center={coords}
            defaultZoom={11}
        // options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        // onChange={(e) => {
        //   setCoords({ lat: e.center.lat, lng: e.center.lng });
        //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        // }}
        // onChildClick={(child) => setChildClicked(child)}
        >

        </GoogleMapReact>
    </div>
}

export default Map;