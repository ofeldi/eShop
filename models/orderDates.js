const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const orderDatesSchema = new Schema ({
            date:{
                type:Date,
                required:true
            }
    })

    module.exports = Category = mongoose.model('orderDates', orderDatesSchema);
