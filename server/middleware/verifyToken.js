import jwt from 'jsonwebtoken';
import users from '../models/UserModel.js  ';

export const verifyToken = (req, res, next) => {
    const accessToken = req.cookies.accessToken;
    if (accessToken === null) return res.sendStatus(401);
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, decode) => {
        if (err) return res.sendStatus(403);
        let email = decode.email;
        let userId = decode.userId;
        try {
            const user = await users.findAll({
                where: {
                    email: email,
                    user_id: userId
                }
            });
            res.locals.username = user[0].username;
            next();
        } catch (e) {
            return res.sendStatus(403);
        }
    });
}