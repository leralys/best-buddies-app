import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const ParkAbout = () => {
    const park = useSelector(state => state.park.park[0]);
    return (
        <section>
            <div>
                <Typography variant='h6'>
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
                <div>
                    Parking:
                    {park.parking
                        ? <> ✅</>
                        : <> 🚫</>
                    }
                </div>
            </div>
            <div>
                <Typography variant='h6'>
                    About
                </Typography>
                {park.description}
            </div>
        </section>
    );
}

export default ParkAbout;