import { useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton, Box } from '@mui/material';
import { Button } from '@mui/material';
import './ParkPageStyles.css';

const ParkDetailes = () => {
    const park = useSelector(state => state.park.park[0]);
    const rate = [...Array(park.rate)].map((elem, i) => <StarIcon key={i} style={{ color: 'var(--color-yelow)' }} />);
    return (
        <>
            <h2 className='Park-header'>{park.address}, {park.city}</h2>
            <div className='row' style={{ width: '60vw' }}>
                <div className='col' style={{ marginRight: '2rem' }}>
                    <div style={{ background: 'green', width: '300px', height: '300px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>MAP</div>
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
                    <Button variant="contained" color="primary" sx={{ mb: 2 }}>
                        Check In
                    </Button>
                </div>
            </div>
            <Box sx={{ display: 'inline-flex', mt: 2 }} style={{ alignItems: 'center', justifyContent: 'flex-start' }} >
                <IconButton aria-label='upload picture' component='span'>
                    <FavoriteBorderIcon style={{ color: 'var(--color-map-red)' }} />
                </IconButton>
                <span>Add to Favorites</span>
            </Box>
        </>
    )
}

export default ParkDetailes;