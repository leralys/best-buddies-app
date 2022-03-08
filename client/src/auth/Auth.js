import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../utilities/url';
import CircularProgress from '@mui/material/CircularProgress';

export const Auth = (props) => {
    const [redirect, setRedirect] = useState(null);
    let navigate = useNavigate();
    useEffect(() => {
        const authenticate = async () => {
            try {
                await axios.get(`${url}/users/token`, {
                    withCredentials: true,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setRedirect(1);
            } catch (e) {
                navigate('/login');
            }
        }
        authenticate();
    }, [navigate]);
    return (
        <div
            style={{ width: '100vw', minHeight: '100vh' }}>
            {redirect ?
                props.children
                : <div className='row' style={{ justifyContent: 'center', marginTop: '100px' }}>
                    <CircularProgress color="success" />
                </div>
            }
        </div>
    );
}