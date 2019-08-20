const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateUserCredentialsInput(data) {
    let errors = {};

    data.identityNumber = !isEmpty(data.identityNumber) ? data.identityNumber : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    // Identity Number Validation

    if(data.identityNumber.length != 9) {
        errors.identityNumber = 'ID Number must be 9 digits'
    }

    if (Validator.isEmpty(data.identityNumber)) {
        errors.identityNumber = 'ID Number field is required';
    }

    // Email Validation

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (!Validator.isEmail(data.email) && !Validator.isEmpty(data.email)) {
        errors.email = 'Email is invalid';
    }

    // Password Validation

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password field is required';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};
