const { 
    addblogPostsWithcategoriesService, 
    getPostCategoryWithUserService,
    getPostUserCategoryByIdService,
    updatePostUserCategoryByIdService,
    deletePostUserCategoryByIdService,
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

const updatePostUserCategoryByIdController = async (req, res) => {
    const { id } = req.params;
    const [postComplete] = await updatePostUserCategoryByIdService(id, req.body, req.user.id);
    res.status(200).json(postComplete);
};

const deletePostUserCategoryByIdController = async (req, res) => {
    const { id } = req.params;
    await deletePostUserCategoryByIdService(id, req.user.id);
    res.status(204).json();
};

module.exports = {
    getPostCategoryWithUserController,
    addBlogPostsWithCategoriesController,
    getPostUserCategoryByIdController,
    updatePostUserCategoryByIdController,
    deletePostUserCategoryByIdController,
};