import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { req } from '../assets/request';

export const Auth = (props) => {
    const [redirect, setRedirect] = useState(null);
    let navigate = useNavigate();
    useEffect(() => {
        const verify = async () => {
            try {
                await axios.get(`${req}/token`, {
                    withCredentials: true,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                });
                setRedirect(1);
            } catch (e) {
                navigate('/login');
            }
        }
        verify();
    }, [navigate]);

    return (
        redirect
            ? <div style={{ width: '100vw', height: '100vh' }}>{props.children}</div>
            : null
    );
}