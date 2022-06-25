const { getUserLoginEmailModel, addUserLoginModel } = require('../models/login.model');

const addUserLoginService = async (userData) => {
    const status = {
        status: 400,
        message: 'Invalid fields',
    };
    const userLogin = await getUserLoginEmailModel(userData);
    
    if (!userLogin) throw status;

    const token = addUserLoginModel(userLogin.dataValues);
    return token;
};

module.exports = { 
    addUserLoginService,
};