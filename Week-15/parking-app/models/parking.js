const mongoose = require('mongoose');
// const dbConnect = require('../database/database')
// dbConnect();
//parking schema with default values
const parkingSchema = mongoose.Schema({
    parking_id:{
        type:String,
        required:true,
        unique:true
    },
    parking_slots:{
        type:Number,
        required:true,
        default:6
    },
    available_slots:{
        type:Number,
        required:true,
        default:6
    },
    used_slots:{
        type:Number,
        required:true,
        default:0
    }
})

const parkingModel = mongoose.model('parkings',parkingSchema);

// const parkingData = {
//     parking_id:'park.01',
//     parking_slots:6,
//     available_slots:6,
//     used_slots:0
// }

// parkingModel.create(parkingData).then((result)=>{
//     console.log(`parking successfully added with parking id:${result.parking_id}`)
// }).catch((error)=>{
//     console.log(error.message)
// })

module.exports = parkingModel;