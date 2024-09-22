import express from 'express';
import bodyParser from 'body-parser';
import issueRoutes from './routes/issueRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', issueRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
