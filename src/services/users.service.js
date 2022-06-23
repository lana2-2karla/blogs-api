const { getUsersAllModel, 
    getUserEmailModel, 
    addUserModel, 
    getUserByIdModel,
} = require('../models/users.models');

const getUsersAllService = async () => {
    const users = await getUsersAllModel();
    return users;
};

const getUserByIdService = async (id) => {
    const user = await getUserByIdModel(id);
    console.log(user);

    const status = {
        status: 404,
        message: 'User does not exist',
    };

    if (!user) throw status;
    return user;
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
    getUserByIdService,
    addUserService,
};