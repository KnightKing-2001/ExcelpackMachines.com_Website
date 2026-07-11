const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// @route   POST /api/auth/login
// @desc    Admin login & get token
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 1. Check if credentials match your .env file
  if (
    username === process.env.ADMIN_USERNAME && 
    password === process.env.ADMIN_PASSWORD
  ) {
    // 2. Sign the token (Valid for 12 hours)
    const token = jwt.sign(
      { role: 'admin' }, 
      process.env.JWT_SECRET, 
      { expiresIn: '12h' }
    );

    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;