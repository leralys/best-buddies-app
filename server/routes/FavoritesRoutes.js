import express from 'express';
import favoritesController from '../controllers/FavoritesController.js';

const router = express.Router();

router.get('/', favoritesController.getFavorites);
router.post('/new', favoritesController.addToFav);
router.delete('/delete', favoritesController.delete);


export default router;