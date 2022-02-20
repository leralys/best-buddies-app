import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Hero = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ backgroundColor: 'var(--color-green)' }}>
                    <Toolbar style={{ paddingRight: '5rem' }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, pl: '2rem' }}>
                            Best Buddies
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem', paddingBottom: '3rem', background: 'var(--color-green)', marginBottom: '2rem' }}>
                <div style={{ height: 'fit-content', display: 'flex', flexDirection: 'column', color: 'white' }}>
                    <h2 style={{ fontWeight: '500' }}>Looking for a friend for you friend?</h2>
                    <br />
                    <h2 style={{ fontWeight: '500' }}>Want to make sure that your buddy won't be alone in the park?</h2>
                    <br />
                    <h1 style={{ fontSize: '4rem' }}>Try Walk With Me!</h1>
                    <br />
                    <h3 style={{ fontWeight: '400', fontStyle: 'italic', fontSize: '1.35rem' }}>
                        Revolutionary app that will change your life (at least we hope so).</h3>
                    <br />
                    <Button variant="contained" size="large" style={{ width: 'fit-content', marginTop: '1rem' }}>
                        Try Now
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Hero;