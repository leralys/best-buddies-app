import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';

const Search = (props) => {
    const locations = useSelector(state => state.locations.locations);
    const [searchText, setSearchText] = useState('');
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();
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
        <FormControl variant='outlined' id={props.id} className='Search-container'>
            <OutlinedInput
                type='text'
                onChange={handleChange}
                onBlur={clickOutside}
                placeholder='Search city'
                size='small'
                endAdornment={
                    <InputAdornment position='end'>
                        <SearchIcon />
                    </InputAdornment>
                }
            />
            {filtered && expanded ?
                <ul className='Search-dropdown'>
                    {filtered.map(el => {
                        return (
                            <li key={el.location_id}
                                onMouseDown={() => navigate(`/locations/${el.location_id}`)}
                            >
                                {el.address}, {el.city}
                            </li>
                        )
                    })}
                </ul>
                : null
            }
        </FormControl>
    );
}

export default Search;