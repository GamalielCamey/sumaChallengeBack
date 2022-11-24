const {Router} = require("express");
const {
  getFlights,
  postAirlines,
  postFlights,
  postAirports,
} = require("../controllers/index.controller.js");

const router = Router();

router.get("/flights", getFlights);
router.post("/airlines", postAirlines);
router.post("/flights", postFlights);
router.post("/airports", postAirports);

module.exports = router;
