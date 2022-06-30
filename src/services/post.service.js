const { 
    addBlogPostsWithCategoriesModel, 
    getPostCategoryWithUserModel,
    getPostUserCategoryByIdModel,
    getBlogPostById,
    updatePostUserCategoryByIdModel,
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

const updatePostUserCategoryByIdService = async (id, postData, userId) => {
    const status = {
        status: 401,
        message: 'Unauthorized user',
    };
    const blogPost = await getBlogPostById(id);
    if (blogPost.id !== userId) throw status;
    const isUpdated = await updatePostUserCategoryByIdModel(id, postData);
    const postComplete = await getPostUserCategoryByIdModel(id);
    if (isUpdated) return postComplete;
};

module.exports = {
    getPostCategoryWithUserService,
    addblogPostsWithcategoriesService,
    getPostUserCategoryByIdService,
    updatePostUserCategoryByIdService,
};