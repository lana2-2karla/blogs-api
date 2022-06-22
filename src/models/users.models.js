const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/jwtToken');

const getUserByIdModel = async (id) => {
    const user = await User.findByPk(id);
    return user;
};

const getUserEmailModel = async (userEmail) => {
    const user = await User.findOne({
        where: {
            email: userEmail,
        }
    });
    return user;
};

const addUserModel = async (userData) => {
    const userCreated = await User.create(userData);
    const generateToken = generateJWTToken(userCreated.dataValues);
    return generateToken;
};

module.exports = { 
    getUserByIdModel,
    getUserEmailModel,
    addUserModel,
};