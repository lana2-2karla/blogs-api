const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const authenticationToken = (req, _res, next) => {
    const token = req.headers.authorization;

    const status = {
        status: 401,
        message: 'Token not found',
    };

    if (!token) throw status;

    try {
        const user = jwt.verify(token, SECRET);
        req.user = user;
    } catch (err) {
       next({
        status: 401,
        message: 'Expired or invalid token',
       });
    }
    
    next();
};

module.exports = authenticationToken;