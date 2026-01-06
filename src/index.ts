import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/config';
import userRoutes from './routes/route';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
connectDB();

app.use('/api', userRoutes);

app.get('/', (req, res) => res.send('Welcome to MERN API'));

app.use((err: any, req: express.Request, res: express.Response) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
