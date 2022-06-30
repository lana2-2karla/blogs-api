const express = require('express');
const usersValidateMiddleware = require('./middlewares/users');
const usersLoginMiddleware = require('./middlewares/login');
const authenticationToken = require('./middlewares/authToken');
const categoriesValidation = require('./middlewares/categories');
const {
    blogPostsValidateMiddleware, 
    blogPostsUpdateValidateMiddleware,
} = require('./middlewares/blogPosts');

const { addUserLoginController } = require('./controllers/login.controller');

const { 
    addUsersController, 
    getUsersAllController, 
    getUserByIdController,
} = require('./controllers/users.controller');

const { 
    addCategoryController, 
    getCategoryAllController } = require('./controllers/categories.controller');
const { 
    addBlogPostsWithCategoriesController, 
    getPostCategoryWithUserController,
    getPostUserCategoryByIdController,
    updatePostUserCategoryByIdController,
} = require('./controllers/posts.controller');

const router = express.Router();

router.post('/login', usersLoginMiddleware, addUserLoginController);

router.post('/user', usersValidateMiddleware, addUsersController);

router.get('/user', authenticationToken, getUsersAllController);

router.get('/user/:id', authenticationToken, getUserByIdController);

router.post('/categories', authenticationToken, categoriesValidation, addCategoryController);

router.get('/categories', authenticationToken, getCategoryAllController);

router.post('/post', 
authenticationToken, 
blogPostsValidateMiddleware, 
addBlogPostsWithCategoriesController);

router.get('/post', authenticationToken, getPostCategoryWithUserController);

router.get('/post/:id', authenticationToken, getPostUserCategoryByIdController);

router.put('/post/:id', 
authenticationToken, 
blogPostsUpdateValidateMiddleware, 
updatePostUserCategoryByIdController);

module.exports = router;