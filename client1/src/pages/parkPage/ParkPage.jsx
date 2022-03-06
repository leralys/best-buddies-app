import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import actions from '../../redux/actions/index';
import Nav from '../../components/nav/Nav';
import ParkInfo from '../../components/parkInfo/ParkInfo';
// import ParkCarousel from '../../components/park/ParkCarousel';
// import ParkAbout from '../../components/park/ParkAbout';
import CheckedIn from '../../components/checkedIn/CheckedIn';
import Invitation from '../../components/invitation/Invitation';
import './parkPage.scss';

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
        <div className='park-page'>
            <Nav />
            <main className='content'>
                {park
                    ? <h2 className='page-header'>{park.address}, {park.city}</h2>
                    : <CircularProgress color="success" />}
                <section className='page-section'>
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
                            <Typography variant='h6' className='page-header'>
                                Nobody was here for the last hour, be first!
                            </Typography>
                        }
                        {!isLoggedIn &&
                            <Invitation />
                        }
                    </div>
                </section>
                {/* <section className='row page-section' id='Carousel' style={{ justifyContent: 'center' }}>
                    {park
                        ? <ParkCarousel id='Carousel' />
                        : <CircularProgress color="success" />
                    }
                </section>
                {park
                    ? <ParkAbout />
                    : <CircularProgress color="secondary" />
                } */}
            </main>
        </div>
    );
}

export default ParkPage;