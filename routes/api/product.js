const express = require ('express');
const router = express.Router();
const passport = require('passport');

const productController = require('../../controllers/product');
const authenticate = passport.authenticate('jwt',{session:false});

//Get all products from the database
router.get('/products',productController.getAllProducts);

//Creates new Product: Admin
router.post('/createNewProduct',authenticate,productController.createNewProduct);

//Get product by categoryId
router.get('/productsByCategory/:id',productController.getProductsByCategory);

//Gets a product by productName
router.get('/productByName/:name',productController.getProductByName);

// Gets a product by product id
router.get('/getProductById/:id',productController.getProductById);

//Gets all products as object
router.get('/productsAsObjects',productController.getProductsAsObjects);

//Get product/s by ontype search
router.get('/search',productController.searchProduct);

module.exports = router;
