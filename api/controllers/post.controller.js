const db = require("../models/index");

//* Db population from large JSON files

const postAirlines = async (req, res) => {
  const data = req.body;

  try {
    const airlines = await db.Airline.bulkCreate(data);
    res.send(airlines);
  } catch (err) {
    res.send(err.message);
  }
};

const postFlights = async (req, res) => {
  const data = req.body;

  try {
    const flights = await db.Flights.bulkCreate(data);
    res.send(flights);
  } catch (err) {
    res.send(err.message);
  }
};

const postAirports = async (req, res) => {
  const data = req.body;

  try {
    const airports = await db.Airports.bulkCreate(data);
    res.send(airports);
  } catch (err) {
    res.send(err.message);
  }
};

const getFlights = (req, res) => {
  res.send("Hello World");
};

module.exports = {
  getFlights,
  postAirlines,
  postFlights,
  postAirports,
};
