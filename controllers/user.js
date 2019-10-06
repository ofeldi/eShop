const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const validateUserCredentialsInput = require('../validation/userCredentials');
const validateRegistration = require('../validation/registration');
const validateLoginInput = require('../validation/login');

const keys = require('../config/keys');
const User = require('../models/User');

exports.checkUserCredentials = (req, res) => {
    const {errors, isValid} = validateUserCredentialsInput(req.body);
    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const userEmail = req.body.email.toLowerCase();

    User.findOne({email: userEmail}).then(user => {
        if (user) {
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
        } else {
            User.findOne({identityNumber: req.body.identityNumber}).then(user => {
                if (user) {
                    errors.identityNumber = 'ID already exists';
                    return res.status(400).json(errors);
                } else {
                    res.status(200).json({
                        userChecked: true
                    })
                }
            })
        }
    })

};

exports.createUser = (req, res) => {
    const {errors, isValid} = validateRegistration(req.body);
    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    } else {
        const userEmail = req.body.email.toLowerCase();
        // Check if user email already exists in the database
        User.findOne({email: userEmail}).then(user => {
            if (user) {
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {
                // Check if user identityNumber already exists in the database
                User.findOne({identityNumber: req.body.identityNumber}).then(user => {
                    if (user) {
                        errors.identityNumber = 'ID already exists';
                        return res.status(400).json(errors);
                    } else {
                        const {identityNumber, email, password, firstName, lastName, city, street} = req.body;
                        // Create new user and save it
                        const newUser = new User({
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            identityNumber: identityNumber,
                            password: password,
                            city: city,
                            street: street
                        });

                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(newUser.password, salt, (err, hash) => {
                                if (err) throw err;
                                newUser.password = hash;
                                newUser.save()
                                    .then(user => res.json(user))
                                    .catch(err => res.json(err))
                            })
                        })
                    }
                }).catch(err => console.log(err))
            }
        })
    }
};

exports.userLogin = (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({email}).then(user => {
        // Check for user
        if (!user) {
            errors.email = 'User was not found';
            return res.status(400).json(errors);
        }

        // Check Password
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (isMatch) {
                    // User Matched
                    const payload = {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        identityNumber: user.identityNumber,
                        city: user.city,
                        street: user.street,
                        isAdmin: user.isAdmin
                    }; // Create JWT Payload


                    if(payload.isAdmin){
                        const adminPayload ={
                            id:payload.id,
                            firstName: payload.firstName,
                            lastName:payload.lastName,
                            identityNumber:payload.identityNumber,
                            isAdmin: payload.isAdmin
                        };
                      jwt.sign(
                          adminPayload,
                          keys.secretOrKey,
                          {expiresIn: 10000},
                          (err,token) =>{
                              res.json({
                                  admin:adminPayload,
                                  token: 'Bearer ' + token
                              })
                          });
                      return;
                    }


                    // Sign Token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {expiresIn: 10000},
                        (err, token) => {
                            res.json({
                                success: true,
                                user:payload,
                                token: 'Bearer ' + token
                            })
                        });
                } else {
                    errors.password = 'Password incorrect';
                    return res.status(400).json(errors);
                }
            })
    })
};

/*exports.checkIfUserAdmin = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            //console.log(user);

            if (user.isAdmin){
                res.status(200).json({
                    user: user,
                    success:true
                });

            } else if (user.isAdmin === false) {
        return (
               res.status(204).json({
                    msg: "User is not an Admin",
                    success:false
                }))
            }
        })
        .catch(err => res.status(500).json({
            msg: "User is not an Admin",
            success:false

        }))
}*/


