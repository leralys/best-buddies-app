import cors from 'cors';
import express, { urlencoded } from 'express';
import { config } from 'dotenv';
import path from 'path';
import db from './config/Database.js';
// import { getAllLocations } from './modules/db';

const app = express();
const PORT = process.env.PORT || 8080;

config();
app.use(cors());
app.use(urlencoded({ extended: false }));

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


app.get('/', (req, res) => {
    res.send('HELLO FROM SERVER');
});

// app.get('/api/locations', async (req, res) => {
//     const data = await getAllLocations();
//     res.json(data);
// });


// Server
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})