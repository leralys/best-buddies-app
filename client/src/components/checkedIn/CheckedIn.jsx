import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import extractTime from '../../utilities/extractTime';
import CheckedInModal from './CheckedInModal';
import './checkedIn.scss';


const CheckedIn = () => {
    const n = 4;
    const checkedIn = useSelector(state => state.checkedIn.checkedIn);
    return (
        <div className='checked-in'>
            <h2>Last Check in's:</h2>
            <div>
                <ul>
                    {checkedIn.slice(0, n).map(el => {
                        return (
                            <li key={el.createdat}>
                                <div>
                                    <div>
                                        <div className='online-icon'></div>
                                        {el.username}
                                    </div>
                                    <div className='checkedin-lastseen'>
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
                        <Typography style={{ marginLeft: '50px' }}>
                            ... and {checkedIn.length - n} more
                        </Typography>
                        <CheckedInModal n={n} />
                    </>
                }
            </div>
        </div>
    )
}

export default CheckedIn;