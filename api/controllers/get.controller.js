const db = require("../models/index");

const getFlights = async (req, res) => {
  try {
    const flights = await db.Flights.findAll();
    res.send(flights);
  } catch (err) {
    res.send(err.message);
  }
};

const getAirlines = async (req, res) => {
  try {
    const airlines = await db.Airline.findAll();
    res.send(airlines);
  } catch (err) {
    res.send(err.message);
  }
};

const getAirports = async (req, res) => {
  try {
    const airports = await db.Airports.findAll();
    res.send(airports);
  } catch (err) {
    res.send(err.message);
  }
};

const getFlightByNum = async (req, res) => {
  const {flightNum} = req.params;
  try {
    const flight = await db.Flights.findAll({
      where: {FLIGHT_NUMBER: flightNum},
    });
    res.send(flight);
  } catch (err) {
    res.send(err.message);
  }
};

const getFlightByAirline = async (req, res) => {
  const {airline} = req.query;
  try {
    const flight = await db.Flights.findAll({
      where: {AIRLINE: airline},
    });
    res.send(flight);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  getFlightByNum,
  getFlights,
  getAirlines,
  getAirports,
  getFlightByAirline,
};
