const mongoose = require('mongoose');

const entranceSchema = mongoose.Schema({
    ticket_no:{
        type:Number,
        require:true
    },
    ticket_id:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    vehicle_no:{
        type:String,
        rerquired:true,
        unique:true
    },
    vehicle_color:{
        type:String,
        required:true
    }
});

const entranceModel = mongoose.model('entrance',entranceSchema);

module.exports = entranceModel;