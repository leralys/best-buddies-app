import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './Hero.css';

const Hero = () => {
    return (
        <div className='Hero-container'>
            <div className='col Hero-text'>
                <h2 >Looking for a friend for you friend?</h2>
                <br />
                <h2>Want to make sure that your buddy won't be alone in the park?</h2>
                <br />
                <h1>Try Best Buddies App!</h1>
                <br />
                <h3>
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
