const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const assetsSchema = mongoose.Schema({
  assetId: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true },
  fixedIncome: { type: Schema.Types.ObjectId, ref: "fixedIncome" },
  cash: { type: Number },
  bankBalance: { type: Number },
  isDeleted: { type: Boolean, default: false },
});
assetsSchema.plugin(paginate);
const assets = mongoose.mongo.model("assets", assetsSchema);

module.exports = assets;
