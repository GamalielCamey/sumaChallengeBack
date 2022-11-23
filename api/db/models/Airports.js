const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "airlines",
    {
      IATA_CODE: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      AIRPORT: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CITY: {
        type: DataTypes.STRING,
      },
      STATE: {
        type: DataTypes.STRING,
      },
      COUNTRY: {
        type: DataTypes.STRING,
      },
      LATITUDE: {
        type: DataTypes.DECIMAL,
      },
      LONGITUDE: {
        type: DataTypes.DECIMAL,
      },
    },
    {createdAt: false, updatedAt: false}
  );
};
