const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports = (req,res,next) =>{
    try {
        passport.authenticate('jwt',function (err,user,info) {
            if (err) {
                return next(err);
            }
            if (user.isAdmin){
                return next();
            }
        }) (req,res,next);
    } catch (err) {
        res.status(401).json({message:"Not Authorized"})
    }
};