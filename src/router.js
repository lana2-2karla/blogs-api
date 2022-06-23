const express = require('express');
const { addUserLoginController } = require('./controllers/login.controller');
const { addUsersController, getUsersAllController } = require('./controllers/users.controller');
const usersValidateMiddleware = require('./middlewares/users');
const usersLoginMiddleware = require('./middlewares/login');
const authenticationToken = require('./middlewares/authToken');

const router = express.Router();

router.post('/login', usersLoginMiddleware, addUserLoginController);

router.post('/user', usersValidateMiddleware, addUsersController);

router.get('/user', authenticationToken, getUsersAllController);

module.exports = router;