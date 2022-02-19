import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import actions from '../redux/actions/index';
import './Search.css';

const Search = () => {
    const dispatch = useDispatch();
    const locations = useSelector(state => state.locations.locations);
    const searchText = useSelector(state => state.locations.searchText);
    const [expanded, setExpanded] = useState(false);
    const expand = () => {
        setExpanded(true);
    }
    const close = () => {
        setExpanded(false);
    }
    // const opened = false;

    const handleChange = (e) => {
        dispatch(actions.changeSearch(e.target.value));
        expand();
    }
    const clickOutside = (e) => {
        e.target.value = '';
        // dispatch(actions.clearSearchField());
        close();
        // dispatch(actions.clearSearchField());
    }
    let filtered;
    if (locations) {
        filtered = locations.filter(adr => {
            return adr.city.toLowerCase().includes(searchText.toLowerCase());
        })
    }
    return (
        <div>
            <input type='text' onChange={handleChange}
                onBlur={clickOutside}
                style={{ position: 'relative' }}></input>
            {filtered && expanded ?
                <ul className='Search-dropdown' style={{ position: 'absolute' }}>
                    {filtered.map(el => {
                        return <li key={el.location_id}
                            id={el.location_id}>
                            {el.address}, {el.city}
                        </li>
                    })}
                </ul>
                : null
            }
        </div>
    )
}

export default Search;