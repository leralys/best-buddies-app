const knex = require('knex');
const env = require('dotenv');

env.config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.HOST,
        port: process.env.DBPORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        // ssl: { rejectUnauthorized: false }
    }
});

// select all locations
const getAllLocations = () => {
    return db('locations')
        .select('*');
}

module.exports = {
    getAllLocations
};
