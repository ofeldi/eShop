const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports = (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
        if (user.isAdmin) {
            return next();
        } else {
            res.status(401).json({message: "Not Authorized"})
        }
    })(req, res, next)
};