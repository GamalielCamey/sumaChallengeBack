"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      YEAR: {
        type: Sequelize.CHAR,
      },
      MONTH: {
        type: Sequelize.CHAR,
      },
      DAY: {
        type: Sequelize.CHAR,
      },
      DAY_OF_WEEK: {
        type: Sequelize.CHAR,
      },
      AIRLINE: {
        type: Sequelize.STRING,
      },
      FLIGHT_NUMBER: {
        type: Sequelize.CHAR,
      },
      TAIL_NUMBER: {
        type: Sequelize.CHAR,
      },
      ORIGIN_AIRPORT: {
        type: Sequelize.STRING,
      },
      DESTINATION_AIRPORT: {
        type: Sequelize.STRING,
      },
      SHEDULED_DEPARTURE: {
        type: Sequelize.CHAR,
      },
      DEPARTURE_TIME: {
        type: Sequelize.CHAR,
      },
      DEPARTURE_DELAY: {
        type: Sequelize.CHAR,
      },
      TAXI_OUT: {
        type: Sequelize.CHAR,
      },
      WHEELS_OFF: {
        type: Sequelize.CHAR,
      },
      SCHEDULED_TIME: {
        type: Sequelize.CHAR,
      },
      ELAPSED_TIME: {
        type: Sequelize.CHAR,
      },
      AIR_TIME: {
        type: Sequelize.CHAR,
      },
      DISTANCE: {
        type: Sequelize.CHAR,
      },
      WHEELS_ON: {
        type: Sequelize.CHAR,
      },
      TAXI_IN: {
        type: Sequelize.CHAR,
      },
      SCHEDULED_ARRIVAL: {
        type: Sequelize.CHAR,
      },
      ARRIVAL_TIME: {
        type: Sequelize.CHAR,
      },
      ARRIVAL_DELAY: {
        type: Sequelize.CHAR,
      },
      DIVERTED: {
        type: Sequelize.BOOLEAN,
      },
      CANCELLED: {
        type: Sequelize.BOOLEAN,
      },
      CANCELLATION_REASON: {
        type: Sequelize.STRING,
      },
      AIR_SYSTEM_DELAY: {
        type: Sequelize.CHAR,
      },
      SECURITY_DELAY: {
        type: Sequelize.CHAR,
      },
      AIRLINE_DELAY: {
        type: Sequelize.CHAR,
      },
      LATE_AIRCRAFT_DELAY: {
        type: Sequelize.CHAR,
      },
      WEATHER_DELAY: {
        type: Sequelize.CHAR,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
