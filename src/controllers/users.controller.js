const { addUserService,
     getUsersAllService, 
     getUserByIdService,
    } = require('../services/users.service');

const addUsersController = async (req, res) => {
    const token = await addUserService(req.body);
    res.status(201).json({ token });
};

const getUsersAllController = async (_req, res) => {
    const users = await getUsersAllService();
    res.status(200).json(users);
};

const getUserByIdController = async (req, res) => {
    const user = await getUserByIdService(req.params.id);
    res.status(200).json(user);
};

module.exports = { 
    addUsersController, 
    getUsersAllController,
    getUserByIdController,
};