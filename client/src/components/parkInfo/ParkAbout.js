import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const ParkAbout = () => {
    const park = useSelector(state => state.park.park[0]);
    return (
        <section className='row page-section Park-about' style={{ justifyContent: 'space-around', marginLeft: '2rem' }}>
            <div className='col'>
                <Typography variant='h6' style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
                    Facilities
                </Typography>
                <ul>
                    {park.facilities.map((el, i) => {
                        return (
                            <li key={i}>{el}</li>
                        )
                    })
                    }
                </ul>
                <div style={{ marginTop: '1rem', fontWeight: 600 }}>
                    Parking:
                    {park.parking
                        ? <> ✅</>
                        : <> 🚫</>
                    }
                </div>
            </div>
            <div className='col' style={{ marginTop: '3rem' }}>
                <Typography variant='h6' style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
                    About
                </Typography>
                {park.description}
            </div>
        </section>
    );
}

export default ParkAbout;