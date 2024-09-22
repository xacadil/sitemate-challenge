import express from 'express';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm'; // Assuming TypeORM for database
import issuesRouter from './routes/issuesRoutes';

const app = express();
app.use(bodyParser.json());

createConnection(); // Adjust based on your database setup

app.use('/issues', issuesRouter);

export default app;
