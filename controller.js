const BookingModel = require("./model"); // Renaming the import to avoid conflict

const getBookingData = (req, res, next) => {
  BookingModel.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

const addBookingData = (req, res, next) => {
  const newBooking = new BookingModel({
    bookingId: req.body.bookingId,
    from: req.body.from,
    to: req.body.to,
    busId: req.body.busId,
    time: req.body.time,
  });

  newBooking
    .save()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

const deleteBookingData = (req, res, next) => {
  const bookingId = req.body.bookingId;
  BookingModel.deleteOne({ bookingId: bookingId })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

const updateBookingData = (req, res, next) => {
  const { bookingId, from, to, busId, time } = req.body;
  BookingModel.updateOne(
    { bookingId: bookingId },
    {
      from: from,
      to: to,
      busId: busId,
      time: time,
    }
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

exports.getBookingData = getBookingData;
exports.addBookingData = addBookingData;
exports.deleteBookingData = deleteBookingData;
exports.updateBookingData = updateBookingData;
