import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern_app';

    const conn = await mongoose.connect(mongoURI, {
    } as any);

  } catch (error: any) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

export default connectDB;
