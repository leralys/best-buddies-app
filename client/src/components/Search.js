import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import actions from '../redux/actions/index';
import './Search.css';

const Search = (props) => {
    const locations = useSelector(state => state.locations.locations);
    const [searchText, setSearchText] = useState('');
    const [expanded, setExpanded] = useState(false);
    const expand = () => {
        setExpanded(true);
    }
    const close = () => {
        setExpanded(false);
    }
    const handleChange = (e) => {
        setSearchText(e.target.value);
        expand();
        if (e.target.value === '') {
            close();
        }
    }
    const clickOutside = (e) => {
        e.target.value = '';
        setSearchText(e.target.value);
        close();
    }
    let filtered;
    if (locations) {
        filtered = locations.filter(adr => {
            return adr.city.toLowerCase().includes(searchText.toLowerCase());
        })
    }
    return (
        <div id={props.id}>
            <input
                type='text'
                onChange={(handleChange)}
                onBlur={clickOutside}
                style={{ position: 'relative' }}
                placeholder='Search city'
            />
            {filtered && expanded ?
                <ul className='Search-dropdown' style={{ position: 'absolute' }}>
                    {filtered.map(el => {
                        return (
                            <li key={el.location_id}
                                id={el.location_id}>
                                {el.address}, {el.city}
                            </li>
                        )
                    })}
                </ul>
                : null
            }
        </div>
    )
}

export default Search;