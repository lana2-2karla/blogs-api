const { addblogPostsWithcategoriesService } = require('../services/blogPost.service');

const addBlogPostsWithCategoriesController = async (req, res) => {
    const blogPost = await addblogPostsWithcategoriesService(req.body, req.user.id);
    res.status(201).json(blogPost);
};

module.exports = {
    addBlogPostsWithCategoriesController,
};