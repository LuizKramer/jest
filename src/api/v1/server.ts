import express, { Request, Response } from 'express';
import mockRouter from './routes/mock-route';
import swaggerUi from 'swagger-ui-express';
const swaggerFile = require('../../../swagger-output.json');

const app = express();


app.use(express.json());
app.use('/mock', mockRouter);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


export default app;