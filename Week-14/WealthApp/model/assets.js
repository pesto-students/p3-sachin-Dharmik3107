const mongoose = require('mongoose');

const fixedIncomeSchema = mongoose.Schema({
    stockId:{type:String,required:true,unique:true},
    stockName:{type:String,required:true},
    quantity:{type:Number,required:true},
    buyDate:{type:Date,required:true},
    buyPrice:{type:Number,required:true},
    sellDate:{type:Date},
    sellPrice:{type:Number}
});
mongoose.model('fixedIncome',fixedIncomeSchema)
const assetsSchema = mongoose.Schema({
    assetId:{type:String,required:true,unique:true},
    userId:{type:String,required:true,unique:true},
    fixedIncome:{type:mongoose.Schema.Types.ObjectId,ref:'fixedIncome'},
    cash:{type:Number},
    bankBalance:{type:Number}
});

const fixedIncome = mongoose.model('fixedIncome',fixedIncomeSchema);
const assets = mongoose.mongo.model('assets',assetsSchema);

module.exports = {fixedIncome,assets};