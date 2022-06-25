const Sequelize = require('sequelize');
const config = require('../database/config/config');
const sequelize = new Sequelize(config.development);

const { BlogPost, PostCategory, Category } = require('../database/models');

const addBlogPostsWithCategoriesModel = async (postData, userId) => {
  const { title, content, categoryIds} = postData;
   
    const status = {
          status: 400,
          message: '"categoryIds" not found',
      };

      const t = await sequelize.transaction();
      const categories = await Category.findAll({ where: { id: categoryIds } } );

      if (categories.length !== postData.categoryIds.length) throw status;

      const blogPost = await BlogPost.create({ title, content, userId }, { transaction: t });

      const { id } = blogPost.dataValues;
      
      await PostCategory.bulkCreate(categoryIds.map((categoryId) => ({ postId: id, categoryId})),
      { transaction: t },
      );

      await t.commit();
    
      return blogPost;
};

// bulkCreat reference: https://sebhastian.com/sequelize-bulk-create/#:~:text=When%20you%20need%20to%20insert,with%20a%20single%20function%20call
// transactions reference: https://sequelize.org/docs/v6/other-topics/transactions/

module.exports = {
  addBlogPostsWithCategoriesModel,
}