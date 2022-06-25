const Joi = require('joi');

const blogPostsValidation = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
}).messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
});

const blogPostsValidateMiddleware = async (req, _res, next) => {
    const { error } = blogPostsValidation.validate(req.body);
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

module.exports = blogPostsValidateMiddleware;