require('dotenv').config();

import express, { json } from 'express';
const app = express();
import { connect, set, connection } from 'mongoose';

connect(process.env.DB_URL, { useNewUrlParser : true }, set('strictQuery', true));
const db = connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(json());

import subscribersRouter from './routes/subscribers';
app.use('/subscribers', subscribersRouter);


app.listen(3000, () => console.log("server started"))