const Product = require('../models/Product');

exports.createNewProduct = (req, res) => {
    const product = new Product({
        categoryId: req.body.categoryId,
        name: req.body.name,
        price: req.body.price,
        imageURL: req.body.imageURL,
    });
    product.save()
        .then(product => res.status(200).json({
            msg: "product saved successfully",
            product: product
        }))
        .catch(err => console.log(err));
};

exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.status(200).json(allProducts))
        .catch(err => res.status(500).json({
            msg: "could not fetch products"
        }))
};

exports.getProductsByCategory = (req, res) => {
    Product.find({categoryId: req.params.id})
        .then(productsByCategory => res.status(200).json(productsByCategory))
        .catch(err => res.status(500).json({
            msg: "could not fetch products"
        }))
};

exports.getProductByName = (req,res) => {
    Product.find({name: req.params.name})
        .then(productByName => res.status(200).json({
            msg: "product found",
            product: productByName
        }))
        .catch(err => res.status(500).json({
            msg: "could not find product name"
        }))
};


exports.getProductById = (req,res)=>{
    Product.findOne({_id : req.params.id})
        .then(product => res.status(200).json(product))
        .catch(err => res.status(500).json({
            msg: "could not find product name",
            error : err
        }))
};
