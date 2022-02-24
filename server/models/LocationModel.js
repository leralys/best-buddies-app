import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

// By default, when the table name is not given, Sequelize automatically pluralizes the model name
// and uses that as the table name. This pluralization is done under the hood by a library called inflection,
// so that irregular plurals (such as person -> people) are computed correctly.
// Of course, this behavior is easily configurable.

const Location = db.define('location', {
    location_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    address: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING
    },
    lat: {
        type: DataTypes.DOUBLE,
    },
    lng: {
        type: DataTypes.DOUBLE
    },
    facilities: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    description: {
        type: DataTypes.STRING,
    },
    rate: {
        type: DataTypes.INTEGER,
    },
    hours: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    parking: {
        type: DataTypes.BOOLEAN,
    }
}, {
    timestamps: false
});

export default Location;