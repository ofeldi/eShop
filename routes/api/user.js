const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const keys = require ('../../config/keys');
const passport = require ('passport');

const User = require('../../models/User')

router.get('/',function(req,res){
    res.json("hello");
})

module.exports = router;
