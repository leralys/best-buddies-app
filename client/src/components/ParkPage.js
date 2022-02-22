import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import actions from '../redux/actions/index';
import Nav from './Nav';
import ParkDetailes from './ParkDetailes';
import ParkCarousel from './ParkCarousel';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import './ParkPageStyles.css';

const ParkPage = (props) => {
    let id = useParams().locationId;
    // let rate;
    const dispatch = useDispatch();
    const park = useSelector(state => state.park.park[0])
    useEffect(() => {
        dispatch(actions.fetchPark(id));
    }, [id]);
    // if (park) {
    //     rate = [...Array(park.rate)].map((elem, index) => <StarIcon style={{ color: 'var(--color-yelow)' }} />);
    // }
    return (
        <div className='page'>
            <Nav />
            <main style={{ width: '90vw', margin: '3rem auto 1rem' }}>
                <section className='row page-section' style={{ justifyContent: 'space-between' }}>
                    <div className='col'>
                        {park ?
                            <ParkDetailes />
                            : <>Loading...</>
                        }
                    </div>
                    <div className='col'>
                        {park &&
                            <>
                                <h2 className='page-header'>Here right now:</h2>
                                <ul>
                                    <li>User_1</li>
                                    <li>User_2</li>
                                    <li>User_3</li>
                                    <li>User_4</li>
                                </ul>
                            </>
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
        </div>
    )
}

export default ParkPage;