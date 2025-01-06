const BusModel = require("./busModel");

// Get all buses
const getBusData = (req, res, next) => {
  BusModel.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

// Add a new bus
const addBusData = (req, res, next) => {
  const newBus = new BusModel({
    busId: req.body.busId,
    info: req.body.info,
    from: req.body.from,
    to: req.body.to,
    rating: req.body.rating,
    time: req.body.time,
  });

  newBus
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

// Update bus data
const updateBusData = (req, res, next) => {
  const { busId, info, from, to, rating, time } = req.body;
  BusModel.updateOne(
    { busId: busId },
    { info: info, from: from, to: to, rating: rating, time: time }
  )
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

// Delete a bus
const deleteBusData = (req, res, next) => {
  const busId = req.body.busId;
  BusModel.deleteOne({ busId: busId })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

exports.getBusData = getBusData;
exports.addBusData = addBusData;
exports.updateBusData = updateBusData;
exports.deleteBusData = deleteBusData;
