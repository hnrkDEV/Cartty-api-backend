const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();
// User routes

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/:id', userController.getUser);

module.exports = router;
// This code defines the user routes for the application.