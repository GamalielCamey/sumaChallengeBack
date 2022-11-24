"use strict";

//* Models for the tables created to be used as the base for the tables that are migrated to the DB

const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airline.init(
    {
      IATA_CODE: DataTypes.STRING,
      AIRLINE: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Airline",
    }
  );
  return Airline;
};
