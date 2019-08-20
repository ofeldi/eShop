const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
});

module.exports = Product = mongoose.model('products', ProductSchema);
