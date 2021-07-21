import express from 'express';
import './database/connection'
import cors from 'cors'
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)


export default app