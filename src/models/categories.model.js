const { Category } = require('../database/models');

const addCategoryModel = async (categoryData) => {
    const categoryCreated = await Category.create(categoryData);
    return categoryCreated;
};

module.exports = {
    addCategoryModel,
}