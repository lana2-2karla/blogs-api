const express = require('express');
const { addUserLoginController } = require('./controllers/login.controller');
const { addUsersController } = require('./controllers/users.controller');
const usersValidateMiddleware = require('./middlewares/users');
const usersLoginMiddleware = require('./middlewares/login');

const router = express.Router();

router.post('/login', usersLoginMiddleware, addUserLoginController);

router.post('/user', usersValidateMiddleware, addUsersController);

module.exports = router;