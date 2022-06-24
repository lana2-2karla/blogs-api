const { Category } = require('../database/models');


const getCategoryAllModel = async () => {
    const categories = await Category.findAll();
    return categories;
}

const addCategoryModel = async (categoryData) => {
    const categoryCreated = await Category.create(categoryData);
    return categoryCreated;
};

module.exports = {
    getCategoryAllModel,
    addCategoryModel,
}