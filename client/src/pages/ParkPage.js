import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import actions from '../redux/actions/index';
import Nav from '../components/Nav';
import ParkDetailes from '../components/ParkDetailes';
import ParkCarousel from '../components/ParkCarousel';
import ParkAbout from '../components/ParkAbout';
import CheckedIn from '../components/CheckedIn';
import Invitation from '../components/Invitation';
import './ParkPageStyles.css';

const ParkPage = () => {
    let id = useParams().locationId;
    const dispatch = useDispatch();
    const park = useSelector(state => state.park.park[0]);
    const isLoggedIn = useSelector(state => state.loggedIn.loggedIn);
    const checkedIn = useSelector(state => state.checkedIn.checkedIn);
    useEffect(() => {
        dispatch(actions.fetchPark(id));
        dispatch(actions.fetchChekins(id));
    }, [dispatch, id]);
    return (
        <>
            <Nav />
            <main className='page' style={{ width: '90vw', margin: '3rem auto 1rem' }}>
                {park
                    ? <h2 className='page-header'>{park.address}, {park.city}</h2>
                    : <CircularProgress color="secondary" />}
                <section className='row page-section'>
                    <div className='col'>
                        {park
                            ? <ParkDetailes />
                            : <CircularProgress color="secondary" />
                        }
                    </div>
                    <div className='col'>
                        {checkedIn.length > 0 && isLoggedIn &&
                            <CheckedIn />
                        }
                        {isLoggedIn && checkedIn.length === 0 &&
                            <Typography variant='h6' className='page-header'>
                                Nobody was here for the last hour, be first!
                            </Typography>
                        }
                        {!isLoggedIn &&
                            <Invitation />
                        }
                    </div>
                </section>
                <section className='row page-section' style={{ justifyContent: 'center' }}>
                    {park
                        ? <ParkCarousel />
                        : <CircularProgress color="secondary" />
                    }
                </section>
                {park
                    ? <ParkAbout />
                    : <CircularProgress color="secondary" />
                }
            </main>
        </>
    );
}

export default ParkPage;