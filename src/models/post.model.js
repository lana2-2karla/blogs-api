const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const { BlogPost, PostCategory, Category, User } = require('../database/models');

const getPostCategoryWithUserModel = async () => {
  const postComplete = BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return postComplete;
};

const addBlogPostsWithCategoriesModel = async (postData, userId) => {
  const { title, content, categoryIds } = postData;
   
    const status = {
          status: 400,
          message: '"categoryIds" not found',
      };

      const t = await sequelize.transaction();
      const categories = await Category.findAll({ where: { id: categoryIds } });

      if (categories.length !== postData.categoryIds.length) throw status;

      const blogPost = await BlogPost.create({ title, content, userId }, { transaction: t });

      const { id } = blogPost.dataValues;
      
      await PostCategory.bulkCreate(categoryIds.map((categoryId) => ({ postId: id, categoryId })),
      { transaction: t });

      await t.commit();
    
      return blogPost;
};

const getPostUserCategoryByIdModel = async (id) => {
  const postComplete = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    where: { id },
  });
  
  return postComplete;
};

const getBlogPostById = (id) => {
  const blogPost = BlogPost.findByPk(id);
  return blogPost;
 };

const updatePostUserCategoryByIdModel = async (id, postData) => {
  const postComplete = await BlogPost.update(postData, { where: { id } });
  return postComplete > 0;
 };

// bulkCreat reference: https://sebhastian.com/sequelize-bulk-create/#:~:text=When%20you%20need%20to%20insert,with%20a%20single%20function%20call
// transactions reference: https://sequelize.org/docs/v6/other-topics/transactions/

module.exports = {
  getPostCategoryWithUserModel,
  addBlogPostsWithCategoriesModel,
  getPostUserCategoryByIdModel,
  getBlogPostById,
  updatePostUserCategoryByIdModel,
};
