const { 
    addBlogPostsWithCategoriesModel,
    } = require('../models/blogPost.model');

const addblogPostsWithcategoriesService = async (postData, userId) => {
    const blogPost = await addBlogPostsWithCategoriesModel(postData, userId);
    return blogPost;
};

module.exports = {
    addblogPostsWithcategoriesService,
};