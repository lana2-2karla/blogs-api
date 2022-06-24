const express = require('express');
const usersValidateMiddleware = require('./middlewares/users');
const usersLoginMiddleware = require('./middlewares/login');
const authenticationToken = require('./middlewares/authToken');
const categoriesValidation = require('./middlewares/categories');

const { addUserLoginController } = require('./controllers/login.controller');

const { 
    addUsersController, 
    getUsersAllController, 
    getUserByIdController,
} = require('./controllers/users.controller');

const { 
    addCategoryController, 
    getCategoryAllController } = require('./controllers/categories.controller');

const router = express.Router();

router.post('/login', usersLoginMiddleware, addUserLoginController);

router.post('/user', usersValidateMiddleware, addUsersController);

router.get('/user', authenticationToken, getUsersAllController);

router.get('/user/:id', authenticationToken, getUserByIdController);

router.post('/categories', authenticationToken, categoriesValidation, addCategoryController);

router.get('/categories', authenticationToken, getCategoryAllController);

module.exports = router;