import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/config';
import userRoutes from './routes/route';

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies


// Connect to MongoDB
connectDB();

// Routes
app.use('/api', userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to MERN API');
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
