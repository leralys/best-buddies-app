import Nav from './Nav';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Box, Button } from '@mui/material';

const UserPage = ({ title }) => {
    return (
        <>
            <Nav />
            <main className='page' style={{ width: '90vw', margin: '3rem auto 1rem' }}>
                <h2 className='page-header'>Hi, {title}</h2>
                <div className='row' style={{ justifyContent: 'space-between' }}>
                    <section className='col' style={{ maxWidth: '300px' }}>
                        <div style={{ background: 'var(--color-green)', width: '300px', height: '300px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            Photo
                        </div>
                        <Box sx={{ display: 'inline-flex', mt: 2 }} >
                            <Button variant="text" style={{ color: 'var(--color-dark-grey)' }} sx={{ display: 'inline-flex', mt: 2 }}>
                                <IconButton aria-label='log out' component='span'>
                                    <LogoutIcon />
                                </IconButton>
                                Log out
                            </Button>
                        </Box>
                        <Box sx={{ display: 'inline-flex' }}>
                            <Button variant="text" style={{ color: 'var(--color-map-red)' }} sx={{ display: 'inline-flex', mt: 2 }}>
                                <IconButton aria-label='delete account' component='span'>
                                    <HighlightOffIcon style={{ color: 'var(--color-map-red)' }} />
                                </IconButton>
                                Delete account
                            </Button>
                        </Box>
                    </section>
                    <section className='col'>
                        <h2 className='page-header'>Favorite parks</h2>
                        <ul>
                            <li>Address_1</li>
                            <li>Address_2</li>
                            <li>Address_3</li>
                            <li>Address_4</li>
                        </ul>
                    </section>
                </div>
            </main>
        </>
    )
}

export default UserPage;