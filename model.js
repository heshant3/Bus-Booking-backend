const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  userId: String,
  bookingId: Number,
  from: String,
  to: String,
  busId: String, // Change this to String
  time: String,
});

const Booking = mongoose.model("bookingdata", BookingSchema);

module.exports = Booking;
// Compare this snippet from controller.js:
// const Product = require("./model");
