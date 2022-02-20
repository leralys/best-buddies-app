import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Search from './Search';

const Nav = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: 'var(--color-dark-grey)' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, pl: '2rem' }}>
                        Walk With Me
                    </Typography>
                    <Search />
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Nav;