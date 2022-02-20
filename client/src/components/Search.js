import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import actions from '../redux/actions/index';
import { Link, useNavigate } from "react-router-dom";
import { IconButton, FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';

const Search = (props) => {
    const locations = useSelector(state => state.locations.locations);
    const [searchText, setSearchText] = useState('');
    const [expanded, setExpanded] = useState(false);
    const dispatch = useDispatch();
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
    const handleMouseDown = id => {
        dispatch(actions.fetchPark(id));
        navigate(`/${id}`)
    }
    let filtered;
    if (locations) {
        filtered = locations.filter(adr => {
            return adr.city.toLowerCase().includes(searchText.toLowerCase());
        })
    }
    return (
        // <div id={props.id} className='Search-container'>
        //     <input
        //         type='text'
        //         onChange={handleChange}
        //         onBlur={clickOutside}
        //         placeholder='Search city'
        //     />
        //     {filtered && expanded ?
        //         <ul className='Search-dropdown'>
        //             {filtered.map(el => {
        //                 return (
        //                     <li key={el.location_id}
        //                         id={el.location_id}>
        //                         {el.address}, {el.city}
        //                     </li>
        //                 )
        //             })}
        //         </ul>
        //         : null
        //     }
        // <IconButton aria-label="upload picture" component="span">
        //     <SearchIcon />
        // </IconButton>
        // </div>
        <FormControl variant="outlined" id={props.id} className='Search-container'>
            <OutlinedInput
                type='text'
                onChange={handleChange}
                onBlur={clickOutside}
                placeholder='Search city'
                size="small"
                endAdornment={
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                }
            />
            {filtered && expanded ?
                <ul className='Search-dropdown'>
                    {filtered.map(el => {
                        return (
                            <li key={el.location_id}
                                // onMouseDown={() => navigate(`/${el.location_id}`)}
                                onMouseDown={() => handleMouseDown(el.location_id)}
                                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                            >
                                {/* <Link to={`/${el.location_id}`}>{el.address}, {el.city}</Link> */}
                                {el.address}, {el.city}
                            </li>
                        )
                    })}
                </ul>
                : null
            }
        </FormControl>
    )
}

export default Search;