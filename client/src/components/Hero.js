import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Hero = () => {
    return (
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
                    className='button-main'
                    component={Link} to={'/register'}
                >
                    Try Now
                </Button>
            </div>
        </div>
    );
}

export default Hero;
