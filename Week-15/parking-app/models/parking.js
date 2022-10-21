const mongoose = require('mongoose');

//parking schema with default values
const parkingSchema = mongoose.Schema({
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

const parkingModel = mongoose.model('parking',parkingSchema);

module.exports = parkingModel;