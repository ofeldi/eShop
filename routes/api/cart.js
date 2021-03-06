const express = require ('express');
const router = express.Router();
const passport = require ('passport');

const cartController = require ('../../controllers/cart');
const authenticate = passport.authenticate('jwt',{session:false});

//Creates new cart for user with userId
router.post('/createCart',authenticate,cartController.createNewCart);

//Add Product to the user cart
//:id = cartId

router.put('/addProductToCart/:id',authenticate,cartController.addProductToCart);

//Delete a product from the users cart
//:id = cartId

router.put('/deleteProduct/:id',authenticate,cartController.deleteProductFromCart);

//Deleted all products from users carts
// :id = cartId

router.put('/deleteAllProducts/:id',authenticate,cartController.deleteAllProductsFromCart);

// Get cart by id
// :id = cartId

router.get('/:id',authenticate,cartController.getCartById);

//Get user cart while checking if it's opened/closed
// :id = userId
//router.get('/getUserCart/:id',authenticate,cartController.getUserCart);

//Get opened cart by userId
// :id = userId
router.get('/getUserCartStatus/:id',authenticate,cartController.getUserCartStatus);

//Update Cart status
//:id = cartId
router.put('/updateCartStatus/:id',authenticate,cartController.updateCartStatus);

//Update cart total price
router.put('/setCartTotalPrice/:id',authenticate,cartController.setCartTotalPrice);

module.exports = router;
