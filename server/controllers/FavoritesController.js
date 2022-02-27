import Favorite from '../models/FavoriteModel.js'


class FavoritesController {
    async getFavorites(req, res) {
        const { username } = req.query;
        try {
            const favorites = await Favorite.findAll({
                attributes: ['id', 'location_id'],
                where: {
                    username: username
                }
            })
            res.status(200).json({ favorites: favorites });
        } catch (e) {
            res.status(400).json({ msg: 'Something went wrong' });
        }
    }
    async addToFav(req, res) {
        const { username, locationId } = req.body;
        // console.log(req.body);
        try {
            await Favorite.create({
                location_id: locationId,
                username: username
            });
            res.status(200).json({ msg: 'Added successfully' });
        } catch (e) {
            res.status(400).json({ msg: 'Something went wrong' });
        }
    }
    async delete(req, res) {
        const { username, locationId } = req.body;
        await Favorite.destroy({
            where: {
                username: username,
                location_id: locationId,
            }
        });
        res.status(200).json({ msg: 'Delete successful' });
    } catch(e) {
        res.status(400).json({ msg: 'Something went wrong' });
    }
}

export default new FavoritesController;