const validateOrder = require('../validation/order');
const Order = require('../models/Order');
const OrderDates = require('../models/orderDates');
const Cart = require('../models/Cart');

/*exports.getUserShippingDetails = (req, res) => {
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
};*/

exports.createNewOrder = (req, res) => {
    const {errors, isValid} = validateOrder(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const {userId, cartId, totalPrice, city, street, deliveryDate, creditCard, cartProducts, cart} = req.body;
    Order.find({deliveryDate: deliveryDate})
        .then(orders => {
            // check if the same delivery date exist more than 3 times
            if (orders.length === 2) {
                        let creditCardEnd = creditCard.slice(12, 16)
                        const newOrder = new Order({
                            userId: userId,
                            cartId: cartId,
                            totalPrice: totalPrice,
                            city: city,
                            street: street,
                            orderDate: new Date(),
                            deliveryDate: deliveryDate,
                            creditCard: creditCardEnd,
                    Products: cartProducts,
                    cart: cart
                });
                newOrder.save()
                    .then(() => {
                        //updateCartStatus(req);
                        deleteCart(req);
                        setFullyBookedDate(req)
                    })
                    .then(order => res.status(200).json({
                        success:"Order created",
                        order: order
                    }))
                    .catch(err => console.log(err))
            } else {
                let creditCardEnd = creditCard.slice(12, 16)
                const newOrder = new Order({
                    userId: userId,
                    cartId: cartId,
                    totalPrice: totalPrice,
                    city: city,
                    street: street,
                    orderDate: new Date(),
                    deliveryDate: deliveryDate,
                    creditCard: creditCardEnd,
                    Products: cartProducts,
                    cart: cart
                });
                newOrder.save()
                    .then(() => {
                        //updateCartStatus(req);
                        deleteCart(req);
                        //setFullyBookedDate(req)
                    })
                    .then(order => res.status(200).json({
                       success:"Order created",
                        order: order
                    }))
                    .catch(err => console.log(err))
            }
        });
};


const deleteCart = (req, res) => {
    Cart.findById(req.body.cartId)
        .then(cart => {
            cart.remove()
                .then(() => res.json({success: true}))
                //.catch(err => res.status(404).json({success: false}))
        })
}

exports.getOrders = (req, res) => {
    Order.find({})
        .then(orders => res.status(200).json(orders))
        .catch(err => res.status(500).json({
            msg: "could not find any orders"
        }))
};

const setFullyBookedDate = (req, res) => {
    const fullyBookedDate = new OrderDates({
        date: req.body.deliveryDate
    });
    fullyBookedDate.save()

};

exports.getOccupiedDates = (req,res) =>{
    OrderDates.find({})
        .then((dates)=>{
            return res.status(200).json(dates)
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                msg:"Error in occupied dates"
            })
        })
};



/*const updateCartStatus = (req, res) => {
    Cart.findOneAndUpdate(
        { _id: req.body.cartId },
        { $set: { isOpen: 2 } },
        { new: true },
        (err, result) => {
            if (err) {
                console.log(err);
            }
        });
};*/



// create receipt functions here
