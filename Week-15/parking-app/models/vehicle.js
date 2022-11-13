const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    vehicle_no:{
        type:String,
        required:true,
        unique:true,
        default:null
    },
    vehicle_color:{
        type:String,
        required:true,
    },
    ticket_id:{
        type:String,
        required:true,
        unique:true
    },
    slot_no:{
        type:Number,
        required:true,
    }
});

const vehicleModel = mongoose.model('vehicles',vehicleSchema);

module.exports = vehicleModel;