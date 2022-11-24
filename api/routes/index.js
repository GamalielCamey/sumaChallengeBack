const {Router} = require("express");
const {
  getFlights,
  postAirlines,
} = require("../controllers/index.controller.js");

const router = Router();

router.get("/flights", getFlights);
router.post("/airlines", postAirlines);

module.exports = router;
