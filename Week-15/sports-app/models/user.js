const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true, maxLength: 100, trim: true },
  lastName: { type: String, required: true, maxLength: 100, trim: true },
  userName: { type: String, required: true, unique: true, lowercase: true },
  birthDate: {
    type: Date,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    maxlength: 128,
  },
  age: { type: Number },
  gender: { type: String, enum: ["male", "female", "others"], default: "user" },
  isDeleted: { type: Boolean, default: false },
},{strict:true});

// userSchema.pre("save", async () => {
//   const user = this;
//   if (user.isModified("password")) {
//     const salt = 10;
//     user.password = await bcrypt.hash(this.password, salt);
//   }
// });

userSchema.methods.validatePassword = async (password) => {
  return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
