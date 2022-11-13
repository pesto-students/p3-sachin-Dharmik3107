const mongoose = require('mongoose');

const paymentDataSchema = mongoose.Schema({
    payment_id:{
        type:String,
        unique:true,
        default:''
    },
    amount:{
        type:Number,
    },
    customer_id:{
        type:String,
        unique:true,
        default:''
    },
    userName:{
        type:String,
        unique:true,
        required:true
    }
});

const paymentModel = mongoose.model('payments',paymentDataSchema);

module.exports = paymentModel;