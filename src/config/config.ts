import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mern_app');
  } catch (error: any) {
    console.error(`MongoDB connection error: ${error.message}`);
  }
};

export default connectDB;
