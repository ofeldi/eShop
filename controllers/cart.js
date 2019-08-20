const Cart = require("../models/Cart");

exports.createNewCart = (req, res) => {
    const cart = new Cart({
        userId: req.body.userId,
        date: new Date(),
        isOpen: true
    });
    cart.save()
        .then(cart => {
            res.status(200).json({
                msg: 'Cart Created',
                cart: cart
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                msg: 'Cart creation error'
            })
        })
};

exports.addProductToCart = (req, res) => {
    Cart.findOneAndUpdate({_id: req.params.id}, {
        $push: {
            products: {
                _id: req.body._id,
                name: req.body.name,
                quantity: req.body.quantity,
                price: req.body.price,
                imageURL: req.body.imageURL
            }
        }
    }, {new: true})
        .then(() => {
            Cart.findOne({_id: req.params.id})
                .then((cart) => {
                    res.json(cart)
                })
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
};

exports.deleteProductFromCart = (req, res) => {
    Cart.findOneAndUpdate({_id: req.params.id},
        {
            $pull: {
                products: {$elemMatch: {_id: req.body.productId}}
            }
        },
        {safe: true, multi: true})
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}))
};

exports.deleteAllProductsFromCart = (req, res) => {
    Cart.updateOne({_id: req.params.id}, {products: []},
        {safe: true, multi: true})
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}))
};

exports.getCartById = (req, res) => {
    Cart.find({_id: req.params.id})
        .then(cart => {
            res.json(cart)
                .catch(err => {
                    console.error(err);
                    res.status(500).send(err);
                });
        })
};

exports.getUserCart = (req, res) => {
    Cart.find({userId: req.params.id, isOpen: true})
        .then(cart => {
            if (cart.length === 0) {
                Cart.find({userId: req.params.id, isOpen: false})
                    .then(checkedCart => {
                        if (checkedCart) {
                            const lastCheckedCart = checkedCart[checkedCart.length - 1];
                            return res.status(200).json({
                                msg: "last order from",
                                cart: lastCheckedCart,
                                OpenCart: false
                            });
                        } else {
                            return res.status(200).json({
                                msg: "Welcome to the shop"
                            })
                        }
                    })
            } else {
                return res.status(200).json({
                    msg: "open cart from",
                    cart: cart,
                    openCart: true
                })
            }
        })
        .catch(err => console.log(err))
};

