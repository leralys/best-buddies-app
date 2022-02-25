import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import actions from '../redux/actions/index';
// import verify from '../services/verify';
import Nav from '../components/Nav';
import ParkDetailes from '../components/ParkDetailes';
import ParkCarousel from '../components/ParkCarousel';
import CheckedIn from '../components/CheckedIn';
import './ParkPageStyles.css';
// import axios from 'axios';
// import { url } from '../utilities/url';

const ParkPage = () => {
    let id = useParams().locationId;
    const dispatch = useDispatch();
    const park = useSelector(state => state.park.park[0]);
    const isLoggedIn = useSelector(state => state.loggedIn.loggedIn);
    const checkedIn = useSelector(state => state.checkedIn.checkedIn);
    useEffect(() => {
        dispatch(actions.fetchPark(id));
        dispatch(actions.fetchChekins(id));
        // const verify = async () => {
        //     try {
        //         const res = await axios.get(`${url}/token`, {
        //             withCredentials: true,
        //             headers: {
        //                 'Access-Control-Allow-Origin': '*',
        //                 'Content-Type': 'application/json'
        //             }
        //         });
        //         dispatch(actions.isLoggedIn({ status: true, username: res.data.username }));
        //     } catch (e) {
        //         dispatch(actions.isLoggedIn({ status: false, username: '' }));
        //     }
        // }
        // verify();
        // verify()
        //     .then(res => {
        //         dispatch(actions.isLoggedIn({ status: true, username: res }));
        //     })
        //     .catch(err => {
        //         dispatch(actions.isLoggedIn({ status: false, username: '' }));
        //     })
    }, [dispatch, id]);
    return (
        <>
            <Nav />
            <main className='page' style={{ width: '90vw', margin: '3rem auto 1rem' }}>
                <section className='row page-section' style={{ justifyContent: 'space-evenly' }}>
                    <div className='col'>
                        {park &&
                            <ParkDetailes />
                        }
                    </div>
                    <div className='col'>
                        {checkedIn.length > 0 &&
                            <CheckedIn />
                        }
                    </div>
                </section>
                <section className='row page-section' style={{ justifyContent: 'center' }}>
                    <ParkCarousel />
                </section>
                {park &&
                    <section className='row page-section' style={{ justifyContent: 'space-around' }}>
                        <div className='col' style={{ width: '30vw' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>Facilities:</h4>
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
                        <div className='col' style={{ width: '30vw' }}>
                            {park.description}
                        </div>
                    </section>
                }
            </main>
        </>
    );
}

export default ParkPage;