import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './invitation.scss';


const Invitation = () => {
    return (
        <div className='invitation'>
            <Typography variant='h5'>Want to see who is here right now?</Typography>
            <Typography variant='h5'>And to meet new friends for your buddy?</Typography>
            <Button variant='contained' size='large'
                className='button'
                component={Link} to={'/login'}>
                Try Now
            </Button>
        </div>
    )
}

export default Invitation;