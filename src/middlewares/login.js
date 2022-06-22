const Joi = require('joi');

const loginValidation = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const usersLoginMiddleware = (req, _res, next) => {
    const { error } = loginValidation.validate(req.body);
    if (error) {
        const status = {
            status: 400, 
            message: 'Some required fields are missing',
        };
        throw status;
    }
    next();
};

module.exports = usersLoginMiddleware;