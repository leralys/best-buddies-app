import express from 'express';
import locationController from '../controllers/LocationController.js';


const router = express.Router();

router.get('/', locationController.getAddresses);
// router.get('/all', locationController.getLocations);
router.get('/:city', locationController.getAddressesByCity);
router.get('/spot/:id', locationController.getOneLocation);


export default router;

// http://localhost:8080/static/1.jpeg