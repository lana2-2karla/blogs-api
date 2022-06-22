const Joi = require('joi');

const usersValidation = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string().required(),
});

const usersValidateMiddleware = async (req, _res, next) => {
    const { error } = usersValidation.validate(req.body);
    if (error) {
        const { message } = error.details[0];
        const status = {
            status: 400, 
            message,
        };
        throw status;
    }
    next();
};

module.exports = usersValidateMiddleware;