const express = require('express');
const User = require('../models/User');
const router = express.Router();

// POST /api/users
router.post('/', async (req, res) => {
  try {
    console.log(req.body); // Debug log

    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('❌ Error:', err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
