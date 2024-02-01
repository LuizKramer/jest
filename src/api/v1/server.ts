import express, { Request, Response } from 'express';
import mockRouter from './routes/mock-route';

const app = express();


app.use(express.json());
app.use('/mock', mockRouter);


export default app;