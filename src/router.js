const express = require('express');
const { addUsersController } = require('./controllers/users.controller');
const usersValidateMiddleware = require('./middlewares/users');

const router = express.Router();

router.post('/user', usersValidateMiddleware, addUsersController);

module.exports = router;