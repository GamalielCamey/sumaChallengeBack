const {Router} = require("express");
const {
  getFlights,
  getAirlines,
  getAirports,
  getFlightByNum,
  getFlightByAirline,
} = require("../controllers/get.controller.js");
const {
  postAirlines,
  postFlights,
  postAirports,
  updateFlight,
} = require("../controllers/post.controller.js");

const {deleteAirport} = require("../controllers/delete.controller.js");

const router = Router();

//* GET ROUTES

router.get("/flights", getFlights);
router.get("/airlines", getAirlines);
router.get("/airports", getAirports);
router.get("/flights/:flightNum", getFlightByNum);
router.get("/flights-airline", getFlightByAirline);

//* POST ROUTES

router.post("/airlines", postAirlines);
router.post("/flights", postFlights);
router.post("/airports", postAirports);

//* UPDATE ROUTES

router.put("/flight-update", updateFlight);

//* DELETE ROUTES

router.post("/delete/:code", deleteAirport);

module.exports = router;
