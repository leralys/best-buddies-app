import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Nav from '../components/Nav';
import ContentWrapper from '../components/ContentWrapper';
import actions from '../redux/actions/index';

const ParkPage = (props) => {
    let id = useParams().locationId;
    const dispatch = useDispatch();
    const park = useSelector(state => state.park.park[0])
    useEffect(() => {
        dispatch(actions.fetchPark(id));
    }, [id]);
    return (
        <div>
            <Nav />
            <div className='row' style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between', width: '90vw', margin: '0 auto' }}>
                <div className='col' style={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'column' }}>
                    {park &&
                        <>
                            <h1>{park.location_id}</h1>
                            <h1>{park.address}</h1>
                        </>
                    }
                </div>
                <div className='col' style={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'column' }}>
                    {park &&
                        <h1>HELLO</h1>
                    }
                </div>
            </div>
        </div>

    )
}

export default ParkPage;