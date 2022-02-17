import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import actions from '../redux/actions/index';

const Select = () => {
    const dispatch = useDispatch();
    const cities = useSelector(state => state.cities);
    const isCurrLoading = useSelector(state => state.loading);
    useEffect(() => {
        dispatch(actions.getAllLocations());
    }, [dispatch]);
    return (
        <div>
            {!cities ?
                <h2>Loading</h2>
                : <select>
                    {cities.map(city => {
                        return <option key={city.location_id}>{city.city}</option>
                    })}
                </select>
            }
        </div>
        // <h1>hello</h1>
    )
}
export default Select;