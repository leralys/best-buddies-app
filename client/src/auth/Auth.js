import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../utilities/url';

export const Auth = (props) => {
    const [redirect, setRedirect] = useState(null);
    let navigate = useNavigate();
    useEffect(() => {
        const authenticate = async () => {
            try {
                const res = await axios.get(`${url}/users/token`, {
                    withCredentials: true,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                });
                console.log(res.data);
                setRedirect(1);
            } catch (e) {
                navigate('/login');
            }
        }
        authenticate();
    }, [navigate]);
    return (
        redirect
            ? <div
                style={{ width: '100vw', height: '100vh' }}>
                {props.children}</div>
            : null
    );
}