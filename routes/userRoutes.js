// routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, promoteToAdmin, getAllUsers } = require('../controllers/userController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/promote', protect, promoteToAdmin);
router.get('/users', protect, admin, getAllUsers); // New route to fetch all users

module.exports = router;
