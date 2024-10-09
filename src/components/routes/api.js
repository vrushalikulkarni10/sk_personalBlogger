// src/routes/api.js
const express = require('express');
const router = express.Router();

// Sample API endpoint
router.get('/hello', (req, res) => {
  res.json({ message: 'Hi from the API!' });
});

module.exports = router;
