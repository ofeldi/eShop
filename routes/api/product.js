const express = require ('express');
const router = express.Router();

const productController = require('../../controllers/product');

const adminCheck = require ('../../middleware/AdminAuthCheck');

//Get all products from the database
router.get('/products',productController.getAllProducts);

//Creates new Product: Admin
router.post('/createNewProduct',adminCheck,productController.createNewProduct);

//Get product by categoryId
router.get('/productsByCategory/:id',productController.getProductsByCategory);

//Gets a product by productName
router.get('/productByName/:name',productController.getProductByName);

// Gets a product by product id
router.get('/getProductById/:id',productController.getProductById);

//Get product/s by ontype search
router.get('/search',productController.searchProduct);

//Edit Product by Id
router.put('/editProductById/:id',adminCheck,productController.editProductById)

module.exports = router;
