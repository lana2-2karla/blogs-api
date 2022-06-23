const categoriesValidation = (req, _res, next) => {
    const status = {
        status: 400,
        message: '"name" is required',
    };

    if (!req.body.name) throw status;

    next();
};

module.exports = categoriesValidation;