import express from 'express';
import Location from '../models/LocationModel.js';

const router = express.Router();
router.get('/', (req, res) => {
    res.send('LOCATIONS API ROUTE')
});
router.get('/all', async (req, res) => {
    try {
        // Find all users
        const locations = await Location.findAll();
        res.json({ locations: locations });
    } catch (e) {
        console.log(e);
    }
});

export default router;