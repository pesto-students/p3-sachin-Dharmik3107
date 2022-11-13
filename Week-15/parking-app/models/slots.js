const mongoose = require('mongoose');
// const dbConnect = require('../database/database');
// dbConnect();

const slotSchema = mongoose.Schema({
    slot_no:{
        type:Number,
        required:true,
        unique:true
    },
    vehicle_no:{
        type:String,
        // required:true,
        default:''
    },
    vehicle_color:{
        type:String,
        // required:true,
        default:''
    }
});

const slotModel = mongoose.model('slots',slotSchema);

// const addSlots = async() => {
//     await slotModel.insertMany([{
//     slot_no:1,
// },{
//     slot_no:2,
// },{
//     slot_no:3,
// },{
//     slot_no:4,
// },{
//     slot_no:5,
// },{
//     slot_no:6,
// }],(error)=>{
//     if (error) console.log(error.message);
//     console.log('data added')
// })};
// addSlots();
module.exports = slotModel;