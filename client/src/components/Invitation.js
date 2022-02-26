import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Invitation = () => {
    return (
        <div className='col' style={{ height: '300px', justifyContent: 'space-evenly' }}>
            <Typography variant='h4' className='page-header'>Want to see the last check in's?</Typography>
            <Typography variant='h5' className='page-header'>Want to meet new friends for your buddy?</Typography>
            <Button variant='contained' size='large'
                className='button-main'
                component={Link} to={'/login'}
                style={{ background: 'var(--color-map-red)' }}
            >
                Try Now
            </Button>
        </div>
    )
}

export default Invitation;