import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Box, TextField, } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Nav from './Nav';
import ContentWrapper from './ContentWrapper';
import './LoginRegister.css';

const Form = ({ title }) => {
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

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
    console.log(title)
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
                                sx={{ m: 1, width: '100%' }}
                            />
                        }
                        <TextField
                            id='email'
                            label='Email'
                            type='email'
                            sx={{ m: 1, width: '100%' }}
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
                        <Button variant='contained' sx={{ m: 1 }} style={{ width: 'fit-content' }}>
                            Sign In
                        </Button>
                        <div style={{ marginTop: '0.5rem' }}>
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