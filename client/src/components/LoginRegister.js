import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Button,
    Box,
    TextField,
    IconButton,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    FormControl
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { toast } from 'react-toastify';
import Nav from './Nav';
import ContentWrapper from './ContentWrapper';
import './LoginRegister.css';
import { req } from '../assets/request';

const Form = ({ title }) => {
    const [values, setValues] = useState({
        password: '',
        email: '',
        username: '',
        showPassword: false,
        msg: ''
    });
    const navigate = useNavigate();
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleNavidation = () => {
        setValues({
            ...values,
            email: '',
            password: '',
            username: '',
            msg: ''
        });
    }
    const handleAction = async (action) => {
        if (action === 'Register') {
            try {
                let response = await axios.post(`${req}/register`, {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                }, {
                    withCredentials: true,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                });
                setValues({
                    ...values,
                    username: '',
                    email: '',
                    password: '',
                    msg: response.data.msg
                });
                toast.success(response.data.msg, {
                    icon: '🐶'
                });
                navigate('/login');
            }
            catch (e) {
                setValues({
                    ...values,
                    msg: e.response.data.msg,
                    username: '',
                    email: '',
                    password: ''
                });
                toast.error(e.response.data.msg, {
                    icon: '😳'
                });
            }
        } else if (action === 'Sign In') {
            try {
                let response = await axios.post(`${req}/login`, {
                    email: values.email,
                    password: values.password,
                }, {
                    withCredentials: true,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                });
                console.log('login response', response.data);
                setValues({
                    ...values,
                    email: '',
                    password: ''
                });
                navigate('/mypage');
            } catch (e) {
                setValues({
                    ...values,
                    email: '',
                    password: '',
                    msg: e.response.data.msg
                });
                toast.error(e.response.data.msg, {
                    icon: '🥺'
                });
            }
        }
    }
    return (
        <>
            <Nav />
            <main className='page'>
                <ContentWrapper>
                    <h2 style={{ marginTop: '3rem' }}>{title}</h2>
                    <Box
                        component='form'
                        noValidate
                        autoComplete='off'
                        className='Form col'>
                        {title === 'Register' &&
                            <TextField
                                id='username'
                                label='Username'
                                type='text'
                                value={values.username}
                                sx={{ m: 1, width: '100%' }}
                                onChange={handleChange('username')}
                            />
                        }
                        <TextField
                            id='email'
                            label='Email'
                            type='email'
                            value={values.email}
                            sx={{ m: 1, width: '100%' }}
                            onChange={handleChange('email')}
                        />
                        <FormControl sx={{ m: 1, width: '100%' }} variant='outlined'>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <OutlinedInput
                                id='password'
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge='end'
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label='Password'
                            />
                        </FormControl>
                        <Button
                            onClick={() => handleAction(title)}
                            variant='contained' sx={{ m: 1 }}
                            style={{ width: 'fit-content' }}>
                            {title === 'Register'
                                ? <>Register</>
                                : <>Sign In</>
                            }
                        </Button>
                        <div style={{ marginTop: '0.5rem' }}
                            onMouseDown={handleNavidation}>
                            {title === 'Register'
                                ? <Link to='/login'>Sign In</Link>
                                : <>
                                    <span>No account? </span>
                                    <Link to='/register'>Register</Link>
                                </>
                            }
                        </div>
                    </Box>
                </ContentWrapper>
            </main>
        </>
    )
}

export default Form;