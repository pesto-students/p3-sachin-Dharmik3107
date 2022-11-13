const stripe = require("stripe")(`${process.env.STRIPE_KEY}`);
const paymentModel = require("../models/payment");
const userModel = require("../models/user");

const subscribe = async (req, res) => {
  try {
    const { userName } = req.query;
    const user = await userModel.findOne({ userName });
    if (user) {
      await stripe.customers
        .create({
          email: req.body.stripeEmail,
          source: req.body.stripeToken,
          name: "Abhangi Dharmik",
          address: {
            line1: "123,xyz,abc",
            postal_code: "392001",
            city: "bharuch",
            country: "India",
          },
        })
        .then((customer) => {
          return stripe.paymentIntents.create({
            amount: 8000,
            description: "Live score subscription",
            currency: "USD",
            customer: customer.id,
            payment_method_types: ["card"],
          });
        })
        .then(async (charge) => {
          const newPayment = new paymentModel({
            userName: user.userName,
            payment_id: charge.id,
            amount: charge.amount,
            customer_id: charge.customer,
          });
          await newPayment
            .save()
            .then((result) => {
              res.json({
                status: 201,
                message: result,
              });
            })
            .catch((error) => {
              res.json({
                status: false,
                message: error.message,
              });
            });
          res.json({
            status: 201,
            message: `Payment Success of ${charge.amount}`,
            id: charge.id,
            charge,
          });
        })
        .catch((error) => {
          res.json({
            error: true,
            message: error.message,
          });
        });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = subscribe;
