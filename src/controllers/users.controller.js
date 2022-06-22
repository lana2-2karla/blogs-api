const { addUserService } = require('../services/users.service');

const addUsersController = async (req, res) => {
    const token = await addUserService(req.body);
    res.status(201).json({ token });
};

module.exports = { addUsersController };