const {Router} = require("express");
const {getFlights} = require("../controllers/index.controller.js");

const router = Router();

router.get("/flights", getFlights);

module.exports = router;
