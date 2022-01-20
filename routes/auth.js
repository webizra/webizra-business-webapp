const path = require('path');
const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/register', authController.getRegisterPage)
router.post('/register', authController.postRegister)
router.get('/login', authController.getLoginPage)
router.post('/login', authController.postLogin)
router.get('/logout', authController.postLogout)

module.exports = router;