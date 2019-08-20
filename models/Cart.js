const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    isOpen:{
      type:Boolean,
        default:true,
        required:true
    },
    products:[{
        _id:{type:Schema.Types.ObjectId,ref:"products",required:true},
        name:{type:String},
        quantity:{type:Number},
        price:{type:Number},
        image:{type:String}
    }]
})


module.exports = Cart = mongoose.model('carts',CartSchema);
