const express = require('express');
const router = express.Router();
const passport = require ('passport');

const orderController = require('../../controllers/order');
const authenticate = passport.authenticate('jwt',{session:false});
const adminCheck = require ('../../middleware/AdminAuthCheck');

// Gets the user's address
// :id = userId

//router.get('/userShippingDetails/:id',authenticate,orderController.getUserShippingDetails);

//Gets all order in the system
router.get('/orders',adminCheck,orderController.getOrders);


//Gets all order length in the system
router.get('/ordersLength',orderController.getOrdersLength);



//Creates new order while checking the delivery date is available
router.post('/createNewOrder',authenticate,orderController.createNewOrder);

//Get all occupied dates
router.get('/getOccupiedDates', authenticate,orderController.getOccupiedDates);

//Get latest order by user Id
router.get('/getLatestOrderByUserId/:id',authenticate,orderController.getLatestOrderByUserId);

module.exports = router;
