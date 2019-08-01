const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const passport = require('passport');
const path = require ('path');

//api routes

const app = express ();

//body parser middleware
app.use(bodyParser).urlencoded({extended:false});
app.use(bodyParser.json());

//DB config

const db = require config('./congif/keys');

//connect to mongo db

mongoose
.connect(db,{useNewUrlParser:true,useFindAndModify:false})
.then(()=>console.log('Mongo db Connected'))
.catch(err=>console.log(err));

//Passport Middleware

app.use(passport.initialize());

//Passport config

require ('./config/passport')(passport);

const port = process.env.PORT || 4000;

//Use Routes
app.listen(port,()=>console.log(`Server is running on port ${port}`));



