const jwt = require("jsonwebtoken");

//Generating token 
const generateToken = (_id, emailId, userName, age) => {
  return jwt.sign({ _id, emailId, userName, age }, process.env.SECRET_KEY);
};

//Verifying user by token
const verifyUser = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = await req.headers.authorization.split(" ")[1];
    jwt.verify(
      token,
      process.env.SECRET_KEY || "iamlearningnode",
      async (err, decoded) => {
        if (decoded) {
          (req._id = decoded._id),
            (req.emailId = decoded.emailId),
            (req.userName = decoded.userName),
            (req.age = decoded.age),
            next();
        } else if (error) {
          res.json({
            status: 400,
            message: "Not Authorized",
          });
        }
      }
    );
  } else {
    res.json({
      status: 400,
      message: "Not Authorized",
    });
  }
};

module.exports = {verifyUser,generateToken};
