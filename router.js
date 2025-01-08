const express = require("express");
const router = express.Router();
const bookingController = require("./controller");
const busController = require("./busController");
const userController = require("./userController");

// Booking Routes
router.get("/bookingdata", bookingController.getBookingData);
router.post("/addbookingdata", bookingController.addBookingData);
router.post("/updatebookingdata", bookingController.updateBookingData);
router.post("/deletebookingdata", bookingController.deleteBookingData);

// Bus Routes
router.get("/busdata", busController.getBusData);
router.post("/addbusdata", busController.addBusData);
router.post("/updatebusdata", busController.updateBusData);
router.post("/deletebusdata", busController.deleteBusData);

// User Routes
router.get("/userdata", userController.getUserData);
router.post("/adduserdata", userController.addUserData);
router.post("/updateuserdata", userController.updateUserData);
router.post("/deleteuserdata", userController.deleteUserData);

module.exports = router;
