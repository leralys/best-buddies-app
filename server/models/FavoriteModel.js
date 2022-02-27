import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Location from './LocationModel.js'
import User from './UserModel.js'

const { DataTypes } = Sequelize;

const Favorite = db.define('favorites', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING
        // references: {
        //     model: User,
        //     key: 'username'
        // }
    },
    location_id: {
        type: DataTypes.INTEGER
        // references: {
        //     model: Location,
        //     key: 'location_id'
        // }
    }
}, {
    timestamps: false
});

export default Favorite;


