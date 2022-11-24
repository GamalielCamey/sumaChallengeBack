'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      YEAR: {
        type: Sequelize.INTEGER
      },
      MONTH: {
        type: Sequelize.INTEGER
      },
      DAY: {
        type: Sequelize.INTEGER
      },
      DAY_OF_WEEK: {
        type: Sequelize.INTEGER
      },
      AIRLINE: {
        type: Sequelize.STRING
      },
      FLIGHT_NUMBER: {
        type: Sequelize.INTEGER
      },
      TAIL_NUMBER: {
        type: Sequelize.CHAR
      },
      ORIGIN_AIRPORT: {
        type: Sequelize.STRING
      },
      DESTINATION_AIRPORT: {
        type: Sequelize.STRING
      },
      SHEDULED_DEPARTURE: {
        type: Sequelize.INTEGER
      },
      DEPARTURE_TIME: {
        type: Sequelize.INTEGER
      },
      DEPARTURE_DELAY: {
        type: Sequelize.INTEGER
      },
      TAXI_OUT: {
        type: Sequelize.INTEGER
      },
      WHEELS_OFF: {
        type: Sequelize.INTEGER
      },
      SCHEDULED_TIME: {
        type: Sequelize.INTEGER
      },
      ELAPSED_TIME: {
        type: Sequelize.INTEGER
      },
      AIR_TIME: {
        type: Sequelize.INTEGER
      },
      DISTANCE: {
        type: Sequelize.INTEGER
      },
      WHEELS_ON: {
        type: Sequelize.INTEGER
      },
      TAXI_IN: {
        type: Sequelize.INTEGER
      },
      SCHEDULED_ARRIVAL: {
        type: Sequelize.INTEGER
      },
      ARRIVAL_TIME: {
        type: Sequelize.INTEGER
      },
      ARRIVAL_DELAY: {
        type: Sequelize.INTEGER
      },
      DIVERTED: {
        type: Sequelize.BOOLEAN
      },
      CANCELLED: {
        type: Sequelize.BOOLEAN
      },
      CANCELLATION_REASON: {
        type: Sequelize.STRING
      },
      AIR_SYSTEM_DELAY: {
        type: Sequelize.INTEGER
      },
      SECURITY_DELAY: {
        type: Sequelize.INTEGER
      },
      AIRLINE_DELAY: {
        type: Sequelize.INTEGER
      },
      LATE_AIRCRAFT_DELAY: {
        type: Sequelize.INTEGER
      },
      WEATHER_DELAY: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};