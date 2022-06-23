const { addCategoryService } = require('../services/categories.service');

const addCategoryController = async (req, res) => {
    const category = await addCategoryService(req.body);
    res.status(201).json(category);
};

module.exports = { addCategoryController };