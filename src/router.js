const express = require('express');
const { addUserLoginController } = require('./controllers/login.controller');
const { addUsersController, 
    getUsersAllController, 
    getUserByIdController,
} = require('./controllers/users.controller');
const usersValidateMiddleware = require('./middlewares/users');
const usersLoginMiddleware = require('./middlewares/login');
const authenticationToken = require('./middlewares/authToken');
const categoriesValidation = require('./middlewares/categories');
const { addCategoryController } = require('./controllers/categories.controller');

const router = express.Router();

router.post('/login', usersLoginMiddleware, addUserLoginController);

router.post('/user', usersValidateMiddleware, addUsersController);

router.get('/user', authenticationToken, getUsersAllController);

router.get('/user/:id', authenticationToken, getUserByIdController);

router.post('/categories', authenticationToken, categoriesValidation, addCategoryController);

module.exports = router;