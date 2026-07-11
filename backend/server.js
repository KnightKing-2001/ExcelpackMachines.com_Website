const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    require('dotenv').config();

    const app = express();

    // Middleware
    app.use(cors());
    app.use(express.json());

    // Database Connection
    mongoose.connect(process.env.MONGO_URI)
      .then(() => console.log('Excelpack Database Connected Successfully'))
      .catch((err) => console.log('DB Connection Error: ', err));

    // --- NEW API ROUTES ---
    const machineRoutes = require('./routes/machineRoutes');
    app.use('/api/machines', machineRoutes);

    app.use('/api/quotes', require('./routes/quoteRoutes'));

    // ----------------------
    // Basic Route to test the server
    app.get('/', (req, res) => {
      res.send('Excelpack API is running...');
    });

    // Add this under your other routes in server.js
    app.use('/api/auth', require('./routes/authRoutes'));

    // Start Server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));