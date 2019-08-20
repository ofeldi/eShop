const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegistration(data) {
    let errors = {};

    data.identityNumber = !isEmpty(data.identityNumber) ? data.identityNumber : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.LastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.city = !isEmpty(data.city) ? data.city : '';
    data.street = !isEmpty(data.street) ? data.street : '';

    // Identity Number Validation

    if(!Validator.isLength(data.identityNumber, {min: 9, max: 9})) {
        errors.identityNumber = 'ID Number must be 9 digits'
    }

    if (Validator.isEmpty(data.identityNumber)) {
        errors.identityNumber = 'ID Number field is required';
    }

    // Email Validation

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    // First Name Validation

    if (!Validator.isLength(data.firstName, {min: 2, max: 30})) {
        errors.firstName = 'First Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = 'First Name field is required';
    }

    // Last Name Validation

    if (!Validator.isLength(data.lastName, {min: 2, max: 30})) {
        errors.lastName = 'Last Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = 'Last Name field is required';
    }

    // City Validation

    if (Validator.isEmpty(data.city)) {
        errors.city = 'City field is required';
    }

    // Street Validation

    if (Validator.isEmpty(data.street)) {
        errors.street = 'Street field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};
