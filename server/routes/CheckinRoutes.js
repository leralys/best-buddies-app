import express from 'express';
import checkinController from '../controllers/CheckinController.js';

const router = express.Router();

router.post('/new', checkinController.newCheckin);
router.get('/all', checkinController.getAllCheckins);
router.get('/users', checkinController.getUsersByLocation);

export default router;