// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./src/routes/api'); // Ensure this path is correct

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use the API routes
app.use('/api', apiRoutes); // Prefix all API routes with /api

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

