const { getUsersAllModel, getUserEmailModel, addUserModel } = require('../models/users.models');

const getUsersAllService = async () => {
    const users = await getUsersAllModel();
    return users;
};

const addUserService = async (userData) => {
    const { email } = userData;
    const userEmail = await getUserEmailModel(email);

    const status = {
        status: 409,
        message: 'User already registered',
    };

    if (userEmail) throw status;

    const token = await addUserModel(userData);
    return token;
};

module.exports = {
    getUsersAllService,
    addUserService,
};