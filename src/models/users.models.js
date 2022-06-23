const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/jwtToken');

const getUsersAllModel = async () => {
    const users = await User.findAll({
        attributes: {exclude: ['password']},
    });
    return users;
}

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
    getUsersAllModel,
    getUserByIdModel,
    getUserEmailModel,
    addUserModel,
};