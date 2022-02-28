import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';
import randomNum from '../utilities/randomNum.js';

class UserConroller {
    async register(req, res) {
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        try {
            await User.create({
                username: username,
                email: email,
                password: hashPassword,
                avatar: randomNum()
            });
            res.json({ msg: 'Register Successful' });
        }
        catch (error) {
            res.status(409).json({ msg: 'Email/Username already exist' });
        }
    }
    async login(req, res) {
        try {
            const user = await User.findAll({
                where: {
                    email: req.body.email
                }
            });
            const match = await bcrypt.compare(req.body.password, user[0].password);
            if (!match) return res.status(403).json({ msg: 'Wrong Password!' });
            const { email, username, avatar } = user[0];
            const userId = user[0].user_id;
            const accessToken = jwt.sign({ userId, email }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1d'
            });
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                maxAge: 86400 * 1000
            });
            res.json({ accessToken, username, avatar });
        } catch (e) {
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
    async changeAvatar(req, res) {
        const { avatar } = req.body;
        const accessToken = req.cookies.accessToken;
        if (!accessToken) return res.sendStatus(204);
        const decoded = jwt.decode(accessToken);
        try {
            await User.update({ avatar: avatar }, {
                where: {
                    user_id: decoded.userId,
                    email: decoded.email
                }
            });
            res.sendStatus(200);
        } catch (e) {
            res.status(400).json({ msg: 'Something went wrong' });
        }
    }
}

export default new UserConroller;