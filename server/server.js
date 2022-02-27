import cors from 'cors';
import { config } from 'dotenv';
import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import db from './config/Database.js';
import locations from './routes/LocationsRoutes.js';
import users from './routes/UserRoutes.js';
import checkins from './routes/CheckinRoutes.js';
import favorites from './routes/FavoritesRoutes.js';

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

config();
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(urlencoded({ extended: false }));
app.use(express.static('images'));
app.use(cookieParser());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'images')));

app.use('/api/locations', locations);
app.use('/users', users);
app.use('/checkins', checkins);
app.use('/favorites', favorites);

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});


// http://localhost:8080/static/1.jpeg
