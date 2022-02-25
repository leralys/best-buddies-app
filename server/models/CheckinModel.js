import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Checkin = db.define('checkin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING
    },
    location_id: {
        type: DataTypes.INTEGER,
    },
    createdAt: {
        field: 'createdat',
        type: DataTypes.DATE
    },
    updatedAt: {
        field: 'updatedat',
        type: DataTypes.DATE
    }
});



export default Checkin;