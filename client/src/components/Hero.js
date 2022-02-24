import { Link } from 'react-router-dom';
import { Button, AppBar, Box, Toolbar, Typography } from '@mui/material';

const Hero = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' style={{ backgroundColor: 'var(--color-green)' }}>
                    <Toolbar style={{ paddingRight: '5rem' }}>
                        <Typography variant='h6' component='div' sx={{ flexGrow: 1, pl: '2rem' }}>
                            <Link className='Nav-link' to={`/`}>Best Buddies</Link>
                        </Typography>
                        {/* <Link className='Nav-link' to={`/login`}><Button color='inherit'>Sign In</Button></Link> */}
                        <Button component={Link} className='Nav-link' to={'/login'}>Sign In</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem', paddingBottom: '3rem', background: 'var(--color-green)', marginBottom: '2rem' }}>
                <div style={{ height: 'fit-content', display: 'flex', flexDirection: 'column', color: 'white' }}>
                    <h2 style={{ fontWeight: '500' }}>Looking for a friend for you friend?</h2>
                    <br />
                    <h2 style={{ fontWeight: '500' }}>Want to make sure that your buddy won't be alone in the park?</h2>
                    <br />
                    <h1 style={{ fontSize: '4rem' }}>Try Best Buddies App!</h1>
                    <br />
                    <h3 style={{ fontWeight: '400', fontStyle: 'italic', fontSize: '1.35rem' }}>
                        Revolutionary app that will change your life (at least we hope so).</h3>
                    <br />
                    <Button variant='contained' size='large'
                        component={Link} to={'/register'}
                        style={{ width: 'fit-content', marginTop: '1rem' }}>
                        Try Now
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Hero;
