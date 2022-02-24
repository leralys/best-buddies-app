import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton, Box, Button } from '@mui/material';
import './ParkPageStyles.css';
import PetsIcon from '@mui/icons-material/Pets';
import { req } from '../assets/request';

const ParkDetailes = () => {
    const park = useSelector(state => state.park.park[0]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const rate = [...Array(park.rate)].map((elem, i) => {
        return <StarIcon key={i} style={{ color: 'var(--color-yelow)' }} />
    });
    useEffect(() => {
        const verify = async () => {
            try {
                await axios.get(`${req}/token`, {
                    withCredentials: true,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                });
                setIsLoggedIn(true);
            } catch (e) {
                setIsLoggedIn(false);
            }
        }
        verify();
    }, []);
    return (
        <>
            <h2 className='page-header'>{park.address}, {park.city}</h2>
            <div className='row' style={{ width: '60vw' }}>
                <div className='col' style={{ marginRight: '2rem' }}>
                    <div style={{ background: 'var(--color-green)', width: '300px', height: '300px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {park.address}
                        <PetsIcon className='marker-icon' />
                    </div>
                </div>
                <div className='col' style={{ marginTop: '1rem', justifyContent: 'space-between' }}>
                    <div className='col'>
                        Rating:
                        <div className='row' style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                            {rate}
                        </div>
                        Open hours:
                        {park.hours.map((el, i) => {
                            return <div key={i} style={{ marginTop: '0.5rem' }}>{el}</div>
                        })}
                    </div>
                    {isLoggedIn &&
                        <Button variant="contained" color="primary" sx={{ mb: 2 }}>
                            Check In
                        </Button>
                    }
                </div>
            </div>
            <Box sx={{ display: 'inline-flex', mt: 2 }}>
                <Button style={{ color: 'var(--color-dark-grey)' }}
                    onClick={() => console.log('add to favorites')}>
                    <IconButton aria-label='add to favorites' component='span'>
                        <FavoriteBorderIcon style={{ color: 'var(--color-map-red)' }} />
                    </IconButton>
                    Add to Favorites
                </Button>
            </Box>
        </>
    )
}

export default ParkDetailes;