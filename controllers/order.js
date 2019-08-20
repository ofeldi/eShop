const parseDate = require('../middleware/parseDate');

const Order = require('../models/Order');
const User = require('../models/User');
const Cart = require('../models/Cart');

exports.getUserShippingDetails = (req, res) => {
    User.findOne({_id: req.params.id})
        .then(user => {
            if (!user) {
                return res.status(400).json({
                    msg: 'User not found'
                })
            } else {
                return res.status(200).json({
                    city: user.city,
                    street: user.street
                })
            }
        })
};

exports.createNewOrder = (req, res) => {
    const {userId, cartId, totalPrice, city, street, deliveryDate, creditCard} = req.body;
    Order.find({deliveryDate: parseDate(deliveryDate)})
        .then(orders => {
            // check if the same delivery date exist more than 3 times
            if (orders.length >= 3) {
                res.status(400).json({
                    msg: "all deliveries are taken for this date"
                })
            } else {
                const newOrder = new Order({
                    userId: userId,
                    cartId: cartId,
                    totalPrice: totalPrice,
                    city: city,
                    street: street,
                    orderDate: new Date(),
                    deliveryDate: parseDate(deliveryDate),
                    creditCArd: creditCard
                });
                newOrder.save()
                    .then(() => {
                        Cart.findOneAndUpdate(
                            {_id: cartId},
                            {$set: {isOpen: false}},
                            {new: true}
                        )
                    })
                    .then(order => res.status(200).json({
                        msg: "success",
                        order: order
                    }))
                    .catch(err => console.log(err))
            }
        });
};

exports.getNumOfOrders = (req, res) => {
    Order.find({})
        .then(orders => res.status(200).json({
            msg: "success",
            orders: orders.length
        }))
        .catch(err => res.status(500).json({
            msg: "could not find any orders"
        }))
};

// create receipt functions here
