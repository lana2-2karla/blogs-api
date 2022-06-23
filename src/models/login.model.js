const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/jwtToken');


const getUserLoginEmailModel = async (userData) => {
    const user = await User.findOne({
        attributes: {exclude: ['password']},
        where: {
            email: userData.email,
        }
    });
    return user;
};

const addUserLoginModel = async (userData) => {
    const generateToken = generateJWTToken(userData);
    return generateToken;
};

module.exports = { 
    getUserLoginEmailModel,
    addUserLoginModel,
};