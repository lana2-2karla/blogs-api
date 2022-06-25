const { 
    addBlogPostsWithCategoriesModel, 
    getPostCategoryWithUserModel,
    } = require('../models/post.model');

const getPostCategoryWithUserService = async () => {
    const postComplete = await getPostCategoryWithUserModel();
    return postComplete;
};

const addblogPostsWithcategoriesService = async (postData, userId) => {
    const blogPost = await addBlogPostsWithCategoriesModel(postData, userId);
    return blogPost;
};

module.exports = {
    getPostCategoryWithUserService,
    addblogPostsWithcategoriesService,
};