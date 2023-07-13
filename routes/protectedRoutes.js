const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Protected route example
router.get('/user', authMiddleware, (req, res) => {
  // Access the authenticated user's information from req.user
  const userId = req.user.userId;
  // Fetch user data from the database or perform other actions
  res.status(200).json({ userId });
});

module.exports = router;
