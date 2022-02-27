import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import '../pages/ParkPageStyles.css';
import './CheckedIn.css';
import extractTime from '../utilities/extractTime';
import CheckedInModal from './CheckedInModal';


const CheckedIn = () => {
    const n = 4;
    const checkedIn = useSelector(state => state.checkedIn.checkedIn);
    return (
        <>
            <h2 className='page-header'>Last Check in's:</h2>
            <div>
                <ul>
                    {checkedIn.slice(0, n).map(el => {
                        return (
                            <li key={el.createdat} className='col'
                                style={{ listStyle: 'none' }}>
                                <div>
                                    <div className='row' style={{ alignItems: 'center' }}>
                                        <div className='online-icon'></div>
                                        {el.username}
                                    </div>
                                    <div className='Checkedin-lastseen'>
                                        Checked in at: {extractTime(el.createdat)}
                                    </div>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
                {checkedIn.length > n &&
                    <>
                        <Typography style={{ alignSelf: 'flex - end' }}>
                            ... and {checkedIn.length - n} more
                        </Typography>
                        <CheckedInModal n={n} />
                    </>
                }
            </div>
        </>
    )
}

export default CheckedIn;