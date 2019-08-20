const express = require('express');
const router = express.Router();
const passport = require('passport');

const categoryController = require('../../controllers/category');
const authenticate = passport.authenticate('jwt',{session:false});

//Gets categories form the database
router.get('/categories',categoryController.getCategories);

// Creates new category: Admin
router.post('/createNewCategory',authenticate,categoryController.createNewCategory);

module.exports = router;
