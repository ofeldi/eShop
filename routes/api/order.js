const express = require('express');
const router = express.Router();
const passport = require ('passport');

const orderController = require('../../controllers/order');
const authenticate = passport.authenticate('jwt',{session:false});

// Gets the user's address
// :id = userId

router.get('/userShippingDetails/:id',authenticate,orderController.getUserShippingDetails);

//Gets the total number of order in the system
router.get('/totalNumOfOrders',orderController.getNumOfOrders);

//Creates new order while checking the delivery date is available
router.post('/createNewOrder',authenticate,orderController.createNewOrder);

module.exports = router;
