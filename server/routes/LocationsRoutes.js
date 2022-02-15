import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
    res.send('LOCATIONS API ROUTE')
});

export default router;