const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({

    userId: {
        type: String,
        required: true
    },
    cartId: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    creditCard: {
        type: String,
        required: true
    },
    Products:[{_id:String,quantity:Number}],

    cart:{
        type:{}
    }
});

module.exports = Order = mongoose.model('orders', OrderSchema);
