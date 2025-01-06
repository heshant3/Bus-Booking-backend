const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BusSchema = new Schema({
  busId: String, // Unique identifier for each bus
  info: String, // Bus name
  from: String, // Starting point
  to: String, // Destination
  rating: Number, // Rating of the bus
  time: String, // Departure time
});

const Bus = mongoose.model("busdata", BusSchema);

module.exports = Bus;
