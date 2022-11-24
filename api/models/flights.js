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
      YEAR: DataTypes.CHAR,
      MONTH: DataTypes.CHAR,
      DAY: DataTypes.CHAR,
      DAY_OF_WEEK: DataTypes.CHAR,
      AIRLINE: DataTypes.STRING,
      FLIGHT_NUMBER: DataTypes.CHAR,
      TAIL_NUMBER: DataTypes.CHAR,
      ORIGIN_AIRPORT: DataTypes.STRING,
      DESTINATION_AIRPORT: DataTypes.STRING,
      SHEDULED_DEPARTURE: DataTypes.CHAR,
      DEPARTURE_TIME: DataTypes.CHAR,
      DEPARTURE_DELAY: DataTypes.CHAR,
      TAXI_OUT: DataTypes.CHAR,
      WHEELS_OFF: DataTypes.CHAR,
      SCHEDULED_TIME: DataTypes.CHAR,
      ELAPSED_TIME: DataTypes.CHAR,
      AIR_TIME: DataTypes.CHAR,
      DISTANCE: DataTypes.CHAR,
      WHEELS_ON: DataTypes.CHAR,
      TAXI_IN: DataTypes.CHAR,
      SCHEDULED_ARRIVAL: DataTypes.CHAR,
      ARRIVAL_TIME: DataTypes.CHAR,
      ARRIVAL_DELAY: DataTypes.CHAR,
      DIVERTED: DataTypes.BOOLEAN,
      CANCELLED: DataTypes.BOOLEAN,
      CANCELLATION_REASON: DataTypes.STRING,
      AIR_SYSTEM_DELAY: DataTypes.CHAR,
      SECURITY_DELAY: DataTypes.CHAR,
      AIRLINE_DELAY: DataTypes.CHAR,
      LATE_AIRCRAFT_DELAY: DataTypes.CHAR,
      WEATHER_DELAY: DataTypes.CHAR,
    },
    {
      sequelize,
      modelName: "Flights",
    }
  );
  return Flights;
};
