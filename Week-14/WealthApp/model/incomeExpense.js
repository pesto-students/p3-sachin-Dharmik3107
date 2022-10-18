const mongoose = require('mongoose');

const incomeExpenseSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    type:{
        type:String,
        enum:['income','expense'],
        required:true
    },
    value:{
        type:Number,
        required:true
    },
    date:{
        type: Date,
        required:true
    },
    description:{
        type:String
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})

const incomeExpense = mongoose.model('incomeExpense',incomeExpenseSchema);
module.exports = incomeExpense;