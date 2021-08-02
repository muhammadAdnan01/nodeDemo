const db = require('../models/index');

const { heartRate } = db;

// eslint-disable-next-line import/order
const moment = require('moment');

const { Op } = db.Sequelize;

function validateCreateRequest(req, res) {
  const { body } = req;
  console.log('request', req.body);
  if (!body) {
    res.status(400).send({
      message: 'request body is required',
    });
  }
  if (!body.systolic) {
    res.status(400).send({
      message: 'Systolic is Required',
    });
  }
  if (!body.diastolic) {
    res.status(400).send({
      message: 'diastolic is Required',
    });
  }
  if (!body.date || !body.time) {
    res.status(400).send({
      message: 'Date Time is Required',
    });
  }
}

// Create and Save a new HeartRate
exports.create = (req, res) => {
  const { body } = req;
  validateCreateRequest(req, res);
  const heartRateBody = {
    Systolic: body.systolic,
    diastolic: body.diastolic,
    date: body.date,
    time: body.time,
    userID: body.UserID || 23,
  };

  // Save HeartRate in the database
  heartRate
    .create(heartRateBody)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the HeartRate.',
      });
    });
};

// Find all published HeartRates
exports.findAllPublished = (req, res) => {
  heartRate
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving HeartRates.',
      });
    });
};

// Retrieve all HeartRates from the database.
exports.findAll = (req, res) => {};

// Find a single HeartRate with an id
exports.findOne = (req, res) => {};

// Update a HeartRate by the id in the request
exports.update = (req, res) => {};

// Delete a HeartRate with the specified id in the request
exports.delete = (req, res) => {};

// Delete all HeartRates from the database.
exports.deleteAll = (req, res) => {};
