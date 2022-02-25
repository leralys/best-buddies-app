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
            await Checkin.create({
                location_id: locationId,
                username: username
            });
            res.status(200).json({ msg: 'Check In Successful' });
        } catch (e) {
            res.sendStatus(400);
        }
    }
}

export default new CheckinController;