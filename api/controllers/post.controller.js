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

const updateFlight = async (req, res) => {
  const {id, departure} = req.body;
  try {
    const prev = await db.Flights.findByPk(id);

    console.log(parseInt(prev.DEPARTURE_TIME.trim()) + departure);

    const flight = await db.Flights.upsert({
      id: id,
      DEPARTURE_TIME: parseInt(prev.DEPARTURE_TIME.trim()) + departure,
      DEPARTURE_DELAY: departure,
      ARRIVAL_TIME: parseInt(prev.ARRIVAL_TIME.trim()) + departure,
      ARRIVAL_DELAY: parseInt(prev.ARRIVAL_DELAY.trim()) + departure,
    });
    res.send(flight);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  getFlights,
  postAirlines,
  postFlights,
  postAirports,
  updateFlight,
};
