import cors from 'cors';
import { config } from 'dotenv';
import express, { urlencoded } from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import db from './config/Database.js';
import locations from './routes/LocationsRoutes.js';

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));

config();
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(express.static('images'));
app.use('/static', express.static(path.join(__dirname, 'images')));

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use('/api/locations', locations);


app.all('*', (req, res) => {
    res.status(404).send('Page Not Found');
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

// to use for images
// http://localhost:8080/static/12.jpeg