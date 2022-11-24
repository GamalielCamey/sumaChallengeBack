"use strict";

//* Models for the tables created to be used as the base for the tables that are migrated to the DB

const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flights.init(
    {
      YEAR: DataTypes.INTEGER,
      MONTH: DataTypes.INTEGER,
      DAY: DataTypes.INTEGER,
      DAY_OF_WEEK: DataTypes.INTEGER,
      AIRLINE: DataTypes.STRING,
      FLIGHT_NUMBER: DataTypes.INTEGER,
      TAIL_NUMBER: DataTypes.CHAR,
      ORIGIN_AIRPORT: DataTypes.STRING,
      DESTINATION_AIRPORT: DataTypes.STRING,
      SHEDULED_DEPARTURE: DataTypes.INTEGER,
      DEPARTURE_TIME: DataTypes.INTEGER,
      DEPARTURE_DELAY: DataTypes.INTEGER,
      TAXI_OUT: DataTypes.INTEGER,
      WHEELS_OFF: DataTypes.INTEGER,
      SCHEDULED_TIME: DataTypes.INTEGER,
      ELAPSED_TIME: DataTypes.INTEGER,
      AIR_TIME: DataTypes.INTEGER,
      DISTANCE: DataTypes.INTEGER,
      WHEELS_ON: DataTypes.INTEGER,
      TAXI_IN: DataTypes.INTEGER,
      SCHEDULED_ARRIVAL: DataTypes.INTEGER,
      ARRIVAL_TIME: DataTypes.INTEGER,
      ARRIVAL_DELAY: DataTypes.INTEGER,
      DIVERTED: DataTypes.BOOLEAN,
      CANCELLED: DataTypes.BOOLEAN,
      CANCELLATION_REASON: DataTypes.STRING,
      AIR_SYSTEM_DELAY: DataTypes.INTEGER,
      SECURITY_DELAY: DataTypes.INTEGER,
      AIRLINE_DELAY: DataTypes.INTEGER,
      LATE_AIRCRAFT_DELAY: DataTypes.INTEGER,
      WEATHER_DELAY: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Flights",
    }
  );
  return Flights;
};
