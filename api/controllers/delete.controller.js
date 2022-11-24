const db = require("../models/index");

const deleteAirport = async (req, res) => {
  const {code} = req.params;
  console.log(code);
  try {
    const airport = await db.Airports.findOne({
      where: {IATA_CODE: code},
    });
    if (airport) {
      airport.destroy();
      return res.send("Deletion successfull");
    } else {
      return res.send("Something went wrong");
    }
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  deleteAirport,
};
