import express from 'express';
import userController from '../controllers/UserController.js';
import { verifyToken } from '../middleware/verifyToken.js';


const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/token', verifyToken, (req, res) => {
    const { username, avatar } = res.locals;
    res.status(200).json({
        username: username,
        avatar: avatar
    });
});
router.delete('/logout', userController.logout);
router.delete('/delete', verifyToken, userController.delete);
router.patch('/avatar', verifyToken, userController.changeAvatar);

export default router;