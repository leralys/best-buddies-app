import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import actions from '../../redux/actions/index';
import Nav from '../../components/nav/Nav';
import ParkInfo from '../../components/parkInfo/ParkInfo';
import CheckedIn from '../../components/checkedIn/CheckedIn';
import Invitation from '../../components/invitation/Invitation';

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
            <main className='page'>
                <section className='content'>
                    <div className='left'>
                        {park
                            ? <ParkInfo />
                            : <CircularProgress color="success" />
                        }
                    </div>
                    <div className='right'>
                        {checkedIn.length > 0 && isLoggedIn &&
                            <CheckedIn />
                        }
                        {isLoggedIn && checkedIn.length === 0 &&
                            <Typography variant='h5'>
                                Nobody was here for the last hour, be first!
                            </Typography>
                        }
                        {!isLoggedIn &&
                            <Invitation />
                        }
                    </div>
                </section>
            </main>
        </>
    );
}

export default ParkPage;