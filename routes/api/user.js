const express = require('express');
const router = express.Router();

const userController = require('../../controllers/user');

router.post('/registerCheck', userController.checkUserCredentials);

router.post('/register', userController.createUser);

router.post('/login', userController.userLogin);

// router.get('/checkIfUserAdmin/:id', userController.checkIfUserAdmin);


module.exports = router;
