import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './routes/students.js';

dotenv.config();
const corsOptions = {
  origin: ['https://cse-2-134-assignment-2-12nn.vercel.app'], // Allow only this domain
  methods: ['GET', 'POST'], // Allow GET and POST methods
  credentials: true, // Allow credentials like cookies or headers
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.use('/students', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
