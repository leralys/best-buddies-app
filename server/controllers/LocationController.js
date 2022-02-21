import Location from '../models/LocationModel.js';
import catchAsync from '../utilities/catchAsync.js';
import { Op } from 'sequelize';

class LocationConroller {
    async getLocations(req, res) {
        // try {
        //     const locations = await Location.findAll();
        //     res.json({ locations: locations });
        // } catch (e) {
        //     console.log(e);
        //     res.sendStatus(503);
        // }
        const [data, error, status] = await catchAsync(Location.findAll(), 503);
        !error ? res.json({ locations: data }) : res.sendStatus(status);
    }
    async getAddresses(req, res) {
        const [data, error, status, msg] = await catchAsync(Location.findAll({
            attributes: ['location_id', 'city', 'address', 'lat', 'lng'],
            order: [
                ['address', 'ASC']
            ],
        }));
        !error ? res.json({ locations: data }) : res.status(status).send(msg);
    }
    async getAddressesByCity(req, res) {
        const { city } = req.params;
        const [data, error, status, msg] = await catchAsync(Location.findAll({
            attributes: ['location_id', 'city', 'address'],
            order: [
                ['address', 'ASC']
            ],
            where: {
                city: {
                    [Op.iLike]: `%${city}%`
                }
            }
        }));
        !error ? res.json({ locations: data }) : res.status(status).send(msg);
    }
    async getOneLocation(req, res) {
        const { id } = req.params;
        const [data, error, status, msg] = await catchAsync(Location.findAll({
            where: {
                location_id: id
            }
        }));
        !error ? res.json({ locations: data }) : res.status(status).send(msg);
    }
}

export default new LocationConroller;