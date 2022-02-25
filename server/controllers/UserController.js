import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

class UserConroller {
    async register(req, res) {
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        try {
            await User.create({
                username: username,
                email: email,
                password: hashPassword
            });
            res.json({ msg: 'Register Successful' });
        }
        catch (error) {
            res.status(409).json({ msg: 'Email/Username already exist' });
        }
    }
    async login(req, res) {
        // console.log(req.body.email, req.body.password);
        try {
            const user = await User.findAll({
                where: {
                    email: req.body.email
                }
            });
            const match = await bcrypt.compare(req.body.password, user[0].password);
            if (!match) return res.status(403).json({ msg: 'Wrong Password!' });
            const { email, username } = user[0];
            const userId = user[0].user_id;
            const accessToken = jwt.sign({ userId, email }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1d'
            });
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                maxAge: 86400 * 1000
            });
            res.json({ accessToken, username });
        } catch (e) {
            // console.log(e);
            res.status(401).json({ msg: 'Email not found' });
        }
    }
    async logout(req, res) {
        const accessToken = req.cookies.accessToken;
        if (!accessToken) return res.sendStatus(204);
        res.clearCookie('accessToken');
        return res.sendStatus(200);
    }
    async delete(req, res) {
        const accessToken = req.cookies.accessToken;
        if (!accessToken) return res.sendStatus(204);
        const decoded = jwt.decode(accessToken);
        try {
            await User.destroy({
                where: {
                    email: decoded.email,
                    user_id: decoded.userId
                }
            });
            res.clearCookie('accessToken');
            res.sendStatus(200);
        } catch (e) {
            res.status(403).json({ msg: 'Something went wrong' });
        }
    }
}

export default new UserConroller;