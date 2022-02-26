import Checkin from '../models/CheckinModel.js'
import { Op } from 'sequelize';


class CheckinController {
    async getAllCheckins(req, res) {
        try {
            const checkins = await Checkin.findAll()
            res.status(200).json({ checkins: checkins });
        } catch (e) {
            res.sendStatus(400);
        }
    }
    async getUsersByLocation(req, res) {
        const { locationId } = req.query;
        try {
            const users = await Checkin.findAll({
                attributes: ['username', 'createdat'],
                order: [
                    ['createdat', 'DESC']
                ],
                where: {
                    // location_id: locationId
                    location_id: locationId,
                    createdAt: {
                        [Op.lt]: new Date(),
                        [Op.gt]: new Date(new Date() - 60 * 60 * 1000)
                    }
                }
            });
            res.status(200).json({ users: users });
        } catch (e) {
            res.sendStatus(404);
        }
    }
    async newCheckin(req, res) {
        const { username, locationId } = req.body;
        try {
            const user = await Checkin.findAll({
                attributes: ['username', 'createdat', 'id'],
                where: {
                    location_id: locationId,
                    username: username,
                    createdAt: {
                        [Op.lt]: new Date(),
                        [Op.gt]: new Date(new Date() - 60 * 60 * 1000)
                    }
                }
            });
            if (user.length > 0) {
                await Checkin.destroy({
                    where: {
                        username: username,
                        id: user[0].id
                    }
                });
            }
            await Checkin.create({
                location_id: locationId,
                username: username
            });
            res.status(200).json({ msg: 'Check In Successful' });
        } catch (e) {
            res.status(400).json({ msg: 'Something went wrong' });
        }
    }
}

export default new CheckinController;