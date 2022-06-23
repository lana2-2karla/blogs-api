const { addCategoryModel } = require('../models/categories.model');

const addCategoryService = async (categoryData) => {
    const category = await addCategoryModel(categoryData);
    return category;
};

module.exports = { 
    addCategoryService,
};