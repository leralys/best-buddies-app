import { Box, Button, Modal } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import extractTime from '../../utilities/extractTime';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    overflow: 'scroll'
};

const ChechedInModal = (props) => {
    const checkedIn = useSelector(state => state.checkedIn.checkedIn);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen}>See all</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style} id='CheckedIn'>
                    {checkedIn.map(el => {
                        return (
                            <li key={el.createdat} className='col'
                                style={{ listStyle: 'none' }}>
                                <div style={{ marginRight: '8rem' }}>
                                    <div className='row' style={{ alignItems: 'center' }}>
                                        <div className='online-icon'></div>
                                        {el.username}
                                    </div>
                                    <div className='Checkedin-lastseen'>
                                        Checked in at: {extractTime(el.createdat)}
                                    </div>
                                </div>
                            </li>
                        )
                    })
                    }
                </Box>
            </Modal>
        </div>
    );
}

export default ChechedInModal;