const Cart = require("../models/Cart");

exports.createNewCart = (req, res) => {
    const cart = new Cart({
        userId: req.body.userId,
        date: new Date(),
        isOpen: 0,
        totalCartPrice:0,


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


//Original function do not touch:
exports.addProductToCart = (req, res) => {
    Cart.findOne({
            _id: req.params.id,
            products: {$elemMatch: {_id: req.body._id}}
        })
        .then(product =>{
            if(product){
                Cart.updateOne({_id:req.params.id,"products._id":req.body._id},{
                    $set:{"products.$.quantity":req.body.quantity}
                    }).then(()=>{
                        Cart.findOne({_id:req.params.id})
                            .then((cart)=>{
                                res.status(200).json(cart);
                            })
                })
                } else {
        Cart.findOneAndUpdate({_id: req.params.id}, {
            $push: {
                products: {
                    _id: req.body._id,
                    quantity: req.body.quantity,
                }
            }
        }, {new: true})
            .then(() => {
                Cart.findOne({_id: req.params.id})
                    .then((cart) => {
                        res.status(200).json(cart);
                    })
            })}
    })
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
};

exports.deleteProductFromCart = (req, res) => {
    Cart.findOneAndUpdate({_id: req.params.id}, {$pull: {products: {_id:req.body._id}}})
        .then(() => {
            Cart.findOne({_id: req.params.id})
                .then(cart => {
                    res.status(200).json(cart);
                })
        }).catch(err=> {
        console.error(err);
        res.status(500).send(err)
    })
};

exports.deleteAllProductsFromCart = (req, res) => {
    Cart.updateOne({_id: req.params.id}, {products: []},
        {safe: true, multi: true})
        .then(() => {
            Cart.findOne({_id: req.params.id})
                .then(cart => {
                    res.status(200).json(cart);
                })
        }).catch(err=> {
        console.error(err);
        res.status(500).send(err)
    })
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

/*exports.getUserCart = (req, res) => {
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
};*/

exports.getUserCartStatus = (req, res) => {
    Cart.findOne({userId: req.params.id})
        .then(cart => {
            if (cart === null) {
                return res.status(202).json({
                    status: 2,
                    msg: "no carts"
                })
            }
            if (cart.isOpen === 0) {
                return res.status(200).json({
                    msg: "cart exists",
                    status: 0,
                    cart: cart
                })
            }
            if (cart.isOpen === 1) {
                return res.status(201).json({
                    msg: `you have an open cart from ${cart.date}`,
                    status: 1,
                    cart: cart
                })
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        })
}


exports.updateCartStatus = (req,res) => {
    Cart.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Cart.findOne({_id: req.params.id})
                .then(cart => {
                    res.status(200).json(cart)
                })
        })
        .catch(err =>{
            console.error(err);
            res.status(500).send(err);
        })
}

exports.setCartTotalPrice = (req,res) =>{
    Cart.findOneAndUpdate({_id:req.params.id},{totalCartPrice:req.body.totalCartPrice})
        .then(()=>{
            Cart.findOne({_id:req.params.id})
            .then(cart=>{
                res.status(200).json(cart)
               })
            })
        .catch(err=>{
            console.error(err);
            res.status(500).send(err);
        })
}
