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
      AIRLINE: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {createdAt: false, updatedAt: false}
  );
};
