const userModel = require("../models/user");
const paymentModel = require("../models/payment");
const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent",
//   headers: {
//     "X-RapidAPI-Key": "56d5d3de1bmshcd3f3e9c629234cp1bf2b0jsnf3be0463d7cf",
//     "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     // console.log(response.data);
//     console.log(
//       response.data.typeMatches[1].seriesMatches[1].seriesAdWrapper.matches
//     );
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

const getScore = async (req, res) => {
  try {
    const { userName } = req.query;
    const user = await userModel.findOne({ userName });
    if (user) {
      const paymentData = await paymentModel.findOne({
        userName: user.userName,
      });
      if (paymentData) {
        const options = {
          method: "GET",
          url: "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent",
          headers: {
            "X-RapidAPI-Key":
              "56d5d3de1bmshcd3f3e9c629234cp1bf2b0jsnf3be0463d7cf",
            "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
          },
        };
        axios
          .request(options)
          .then(function (response) {
            res.json({
                status:201,
                score:response.data.typeMatches[1].seriesMatches[1].seriesAdWrapper.matches
            })
          })
          .catch(function (error) {
            console.error(error);
          });
      }else{
        res.json({
            error:false,
            message:'please subscrive first to see score'
        })
      }
    }else{
        res.json({
            error:false,
            message:'user not found'
        })
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getScore;
