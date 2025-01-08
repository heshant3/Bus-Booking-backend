const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");
const busController = require("./busController"); // Import the bus controller
const userController = require("./userController"); // Import the user controller

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Booking Data Endpoints
app.get("/bookingdata", (req, res) => {
  controller.getBookingData((data) => {
    res.send(data);
  });
});

app.post("/addbookingdata", (req, res) => {
  controller.addBookingData(req.body, (result) => {
    res.send(result);
  });
});

app.post("/deletebookingdata", (req, res) => {
  controller.deleteBookingData(req.body, (result) => {
    res.send(result);
  });
});

app.post("/updatebookingdata", (req, res) => {
  controller.updateBookingData(req.body, (result) => {
    res.send(result);
  });
});

// Bus Data Endpoints
app.get("/busdata", (req, res) => {
  busController.getBusData((data) => {
    res.send(data);
  });
});

app.post("/addbusdata", (req, res) => {
  busController.addBusData(req.body, (result) => {
    res.send(result);
  });
});

app.delete("/deletebusdata", (req, res) => {
  busController.deleteBusData(req.body, (result) => {
    res.send(result);
  });
});

app.put("/updatebusdata", (req, res) => {
  busController.updateBusData(req.body, (result) => {
    res.send(result);
  });
});

// User Data Endpoints
app.get("/userdata", (req, res) => {
  userController.getUserData((data) => {
    res.send(data);
  });
});

app.post("/adduserdata", (req, res) => {
  userController.addUserData(req.body, (result) => {
    res.send(result);
  });
});

app.delete("/deleteuserdata", (req, res) => {
  userController.deleteUserData(req.body, (result) => {
    res.send(result);
  });
});

app.put("/updateuserdata", (req, res) => {
  userController.updateUserData(req.body, (result) => {
    res.send(result);
  });
});

module.exports = app;
