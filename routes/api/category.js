const express = require('express');
const router = express.Router();
const passport = require('passport');

const categoryController = require('../../controllers/category');
const adminCheck = require ('../../middleware/AdminAuthCheck');

//Gets categories form the database
router.get('/categories',categoryController.getCategories);

// Creates new category: Admin
router.post('/createNewCategory',adminCheck,categoryController.createNewCategory);

module.exports = router;
