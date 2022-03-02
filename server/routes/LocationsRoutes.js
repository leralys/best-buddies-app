import express from 'express';
import locationController from '../controllers/LocationController.js';


const router = express.Router();

router.get('/', locationController.getAddresses);
router.get('/:city', locationController.getAddressesByCity);
router.get('/spot/:id', locationController.getOneLocation);


export default router;