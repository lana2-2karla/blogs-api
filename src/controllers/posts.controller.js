const { 
    addblogPostsWithcategoriesService, 
    getPostCategoryWithUserService,
    getPostUserCategoryByIdService,
} = require('../services/post.service');

const getPostCategoryWithUserController = async (_req, res) => {
    const postComplete = await getPostCategoryWithUserService();
    res.status(200).json(postComplete);
};

const addBlogPostsWithCategoriesController = async (req, res) => {
    const blogPost = await addblogPostsWithcategoriesService(req.body, req.user.id);
    res.status(201).json(blogPost);
};

const getPostUserCategoryByIdController = async (req, res) => {
    const [postComplete] = await getPostUserCategoryByIdService(req.params.id);
    res.status(200).json(postComplete);
};

module.exports = {
    getPostCategoryWithUserController,
    addBlogPostsWithCategoriesController,
    getPostUserCategoryByIdController,
};