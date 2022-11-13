const entrance = require("../models/entrance");
const vehicleData = require("../models/vehicle");
const parkingData = require("../models/parking");
const slotModel = require("../models/slots");

const addVehicle = async (req, res) => {
  const { vehicle_no, vehicle_color } = req.query;
  //vehicle_no = GJ-05-XX-0000

  //ticket no generator
  const ticketNoGenerator = (vehicle_no) => {
    const alphabets = parseInt(vehicle_no.split("-")[2]);
    const lastDigits = parseInt(vehicle_no.split("-")[3]);
    return `${alphabets}${lastDigits}`;
  };

  //ticket id generator
  const ticketIdGenerator = (vehicle_no) => {
    const lastDigits = parseInt(vehicle_no.split("-")[3]);
    return `${lastDigits}${Date.now()}`;
  };

  //finding number of available slots from parking data
  const parking = await parkingData.findOne({ parking_id: "park.01" });

  //if slots available
  if (parking.available_slots > 0) {
    const data = {
      ticketNo: ticketNoGenerator(vehicle_no),
      ticketId: ticketIdGenerator(vehicle_no),
      vehicle_no: vehicle_no,
      vehicle_color: vehicle_color,
    };

    //creating new document for new vehicle to generate ticket id and no in entrace data
    await entrance
      .create(data)
      .then((result) => {
        res.json({
          status: 201,
          message: `Ticket generated for ${result.vehicle_no}`,
        });
      })
      .catch((error) => {
        res.json({
          status: 500,
          message: error.message,
        });
      });

    //function to check empty slot no
    const checkSlots = async (number) => {
      const result = await slotModel.findOne({ slot_no: number });
      if (result.vehicle_no === "") return result.slot_no;
      else return false;
    };

    //alloting nearest slot to added vehicle and creating new doc in slots data
    for (let i = 1; i < 7; i++) {
      const slotNo = checkSlots(i);
      if (slotNo !== false) {

        //updating slot data based on available slots
        await slotModel
          .updateOne(
            { slot_no: slotNo },
            { vehicle_no: vehicle_no, vehicle_color: vehicle_color }
          )
          .then((result) => {
            return res.json({
              status: 201,
              message: `Slot data updated `,
            });
          })
          .catch((error) => {
            return res.json({
              error: true,
              message: error.message,
            });
          });

        //creating new docs for every vehicle to keep record
        await vehicleData
          .create({
            vehicle_no: result.vehicle_no,
            vehicle_color: result.vehicle_color,
            ticket_id: ticketIdGenerator(vehicle_no),
            slot_no: slotNo,
          })
          .then((result) => {
            return res.json({
              status: 201,
              message: "vehicle data added successfully",
            });
          })
          .catch((error) => {
            return res.json({
              error: true,
              message: error.message,
            });
          });
      }
    }

    //updating parking data after adding vehicle into entrance
    await parkingData
      .updateOne(
        { parking_id: "park.01" },
        {
          available_slots: parking.available_slots - 1,
          used_slots: parking.used_slots + 1,
        }
      )
      .then((result) => {
        console.log("parking slot update at parking data", result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    req.json({
      status: 500,
      message: "Sorry, No slots available.Have a great day...",
    });
  }
};

module.exports = addVehicle;
