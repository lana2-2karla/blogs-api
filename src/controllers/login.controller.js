const { addUserLoginService } = require('../services/login.service');

const addUserLoginController = async (req, res) => {
    const token = await addUserLoginService(req.body);
    res.status(200).json({ token });
};

module.exports = { addUserLoginController };