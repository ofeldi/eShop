const Validator = require('validator');
const isEmpty = require('./is-empty');
const isCreditCard = require('../middleware/isCreditCard');

module.exports = function validateOrder(data) {
    let errors = {};

    data.city = !isEmpty(data.city) ? data.city : '';
    data.street = !isEmpty(data.street) ? data.street : '';
    data.deliveryDate = !isEmpty(data.deliveryDate) ? data.deliveryDate : "";
    data.creditCard = !isEmpty(data.creditCard) ? data.creditCard : "";

    // City Validation

    if (Validator.isEmpty(data.city)) {
        errors.city = 'City field is required';
    }

    // Street Validation

    if (Validator.isEmpty(data.street)) {
        errors.street = 'Street field is required';
    }

    //shippingDate Validation
    if (Validator.isEmpty(data.deliveryDate)){
        errors.deliveryDate = 'Shipping date is required';
    }

    //CreditCard Validation
    if (!isCreditCard(data.creditCard)){
        errors.creditCard = 'Credit card is invalid :('
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }




};
