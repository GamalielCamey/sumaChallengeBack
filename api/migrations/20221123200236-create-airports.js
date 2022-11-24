"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Airports", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      IATA_CODE: {
        type: Sequelize.STRING,
      },
      AIRPORT: {
        type: Sequelize.STRING,
      },
      CITY: {
        type: Sequelize.STRING,
      },
      STATE: {
        type: Sequelize.STRING,
      },
      COUNTRY: {
        type: Sequelize.STRING,
      },
      LATITUDE: {
        type: Sequelize.NUMERIC,
      },
      LONGITUDE: {
        type: Sequelize.NUMERIC,
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
    await queryInterface.dropTable("Airports");
  },
};
