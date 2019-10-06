const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const cors = require('cors');

// Api Routes
const user = require('./routes/api/user');
const product = require('./routes/api/product');
const cart = require('./routes/api/cart');
const category = require('./routes/api/category');
const order = require('./routes/api/order');

// Express
const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors
app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

const port = process.env.PORT || 4000;

// Use Routes
app.use('/api/user', user);
app.use('/api/cart', cart);
app.use('/api/product', product);
app.use('/api/category', category);
app.use('/api/order', order);

// Listen
app.listen(port, () => console.log(`Server is running on port ${port}`));


//for Deoploy
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<name-of-app>'));

app.get('/*', function(req,res) {

    res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
});