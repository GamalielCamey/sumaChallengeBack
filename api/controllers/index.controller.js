const db = require("../models/index");
const getFlights = (req, res) => {
  res.send("Hello World");
};

const postAirlines = async (req, res) => {
  const data = req.body;

  try {
    const airlines = await db.Airline.create(data);
    res.send(airlines);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  getFlights,
  postAirlines,
};
