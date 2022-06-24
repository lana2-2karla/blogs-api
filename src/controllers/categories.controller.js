const { addCategoryService, getCategoryAllService } = require('../services/categories.service');

const getCategoryAllController = async (_req, res) => {
    const categories = await getCategoryAllService();
    res.status(200).json(categories);
};

const addCategoryController = async (req, res) => {
    const category = await addCategoryService(req.body);
    res.status(201).json(category);
};

module.exports = { 
    getCategoryAllController,
    addCategoryController,
};