"use strict";

//* Models for the tables created to be used as the base for the tables that are migrated to the DB

const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airports.init(
    {
      IATA_CODE: DataTypes.STRING,
      AIRPORT: DataTypes.STRING,
      CITY: DataTypes.STRING,
      STATE: DataTypes.STRING,
      COUNTRY: DataTypes.STRING,
      LATITUDE: DataTypes.DECIMAL,
      LONGITUDE: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Airports",
    }
  );
  return Airports;
};
