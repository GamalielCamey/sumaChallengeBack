"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Airports", [
      {
        IATA_CODE: "",
        AIRPORT: "",
        CITY: "",
        STATE: "",
        COUNTRY: "",
        LATITUDE: "",
        LONGITUDE: "",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Flights", {}, null);
  },
};
