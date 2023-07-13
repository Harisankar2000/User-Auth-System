const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protectedRoutes');

dotenv.config();
db.connect(); // Establish MongoDB connection

const app = express();
app.use(express.json());

// API routes
app.use('/api/v1', authRoutes);
app.use('/api/v1',protectedRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

