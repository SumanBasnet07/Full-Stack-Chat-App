import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import userRoute from './routes/user.route.js';
import messageRoute from './routes/message.route.js';
import { app, server } from './sockets/server.js';

dotenv.config();

// Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "http://192.168.0.34:5173"],
  credentials: true
}));
app.use(cookieParser());

// Routes
app.use('/user', userRoute);
app.use('/message', messageRoute);

if (process.env.NODE_ENV === 'production') {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const frontendPath = path.resolve(__dirname, '../frontend/dist');

  app.use(express.static(frontendPath));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
  });
}

// MongoDB + Server
const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URI;

try {
  mongoose.connect(MONGO);
  console.log(' Connected to MongoDB');
} catch (error) {
  console.log('MongoDB connection failed');
}


server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
