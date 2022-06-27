const { 
    addBlogPostsWithCategoriesModel, 
    getPostCategoryWithUserModel,
    getPostUserCategoryByIdModel,
    getBlogPostById,
    } = require('../models/post.model');

const getPostCategoryWithUserService = async () => {
    const postComplete = await getPostCategoryWithUserModel();
    return postComplete;
};

const addblogPostsWithcategoriesService = async (postData, userId) => {
    const blogPost = await addBlogPostsWithCategoriesModel(postData, userId);
    return blogPost;
};

const getPostUserCategoryByIdService = async (id) => {
    const status = {
        status: 404,
        message: 'Post does not exist',
    };
    const blogPost = await getBlogPostById(id);
    if (!blogPost) throw status;
    const postComplete = await getPostUserCategoryByIdModel(id);
    return postComplete;
};

module.exports = {
    getPostCategoryWithUserService,
    addblogPostsWithcategoriesService,
    getPostUserCategoryByIdService,
};