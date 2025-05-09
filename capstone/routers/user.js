const express = require('express');
const router = express.Router();
const controller = require('../controllers/usercontroller');

router.get('/register', controller.registerIndex);

router.post('/register', controller.register);

router.get('/login', controller.loginIndex);

router.post('/login', controller.login);

router.get('/profile', controller.profileIndex);

router.get('/logout', controller.logout);

router.get('/profile/edit', controller.editIndex);

router.put('/profile', controller.edit);

module.exports = router;