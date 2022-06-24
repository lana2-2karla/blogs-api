const { addCategoryModel, getCategoryAllModel } = require('../models/categories.model');

const getCategoryAllService = async () => {
    const categories = await getCategoryAllModel();
    return categories;
};

const addCategoryService = async (categoryData) => {
    const category = await addCategoryModel(categoryData);
    return category;
};

module.exports = { 
    getCategoryAllService,
    addCategoryService,
};