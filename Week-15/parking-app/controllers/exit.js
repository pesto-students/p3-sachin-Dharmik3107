const exit =require('../models/exit');
const entrance = require('../models/entrance')
const vehicleData = require("../models/vehicle");
const parkingData = require("../models/parking");
const slotModel = require('../models/slots');

const removeVehicle = async (req,res) => {
    const {vehicle_no} = req.query;

    const user = await vehicleData.findOne({vehicle_no:vehicle_no});

    if(user){
        //update slot data to available
        await slotModel.updateOne({slot_no:user.slot_no},{vehicle_no:'',vehicle_color:''}).then((result)=>{
            console.log('slotData update',result);
        }).catch((error)=>{
            console.log(error.message)
        });


        const parking = await parkingData.findOne({ parking_id: "park.01" });
        //update parking data to check slot availibility at entrance
        await parkingData.updateOne({parking_id:'park.01'},{available_slots:parking.available_slots+1,used_slots:parking.used_slots-1}).then((result)=>{
            console.log('Parking data updated',result);
        }).catch((error)=>{
            console.log(error.message);
        });

        //finding entrance data of vehicle
        const entraceData = await entrance.findOne({vehicle_no:vehicle_no})

        //creating new document for every car leaving the parking
        await exit.create({
            ticket_no:entraceData.ticket_no,
            ticket_id:entrance.ticket_id,
            vehicle_no:vehicle_no,
            vehicle_color:entrance.vehicle_color
        }).then((result)=>{
            console.log('exit data created',result);
            res.json({
                status:201,
                message:result
            })
        }).catch((error)=>{
            console.log(error.message);
        })
    }
}

module.exports = removeVehicle;

