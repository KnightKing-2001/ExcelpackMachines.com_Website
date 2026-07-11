const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
// We use the environment variable for security, with a local fallback for testing
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Database Connection
// Ensure MONGO_URI is set in your Render Backend Environment settings
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Excelpack Database Connected Successfully'))
  .catch((err) => console.error('DB Connection Error: ', err));

// Routes
const machineRoutes = require('./routes/machineRoutes');
app.use('/api/machines', machineRoutes);

const quoteRoutes = require('./routes/quoteRoutes');
app.use('/api/quotes', quoteRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('Excelpack API is running...');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));