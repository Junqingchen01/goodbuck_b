const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connections/mysql").sequelize;

class Dica extends Model {}

Dica.init(
  {
    DicaID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Title: DataTypes.STRING,
    Content: DataTypes.TEXT,
    Type: DataTypes.STRING,
    Date: DataTypes.DATE,
    URI: DataTypes.STRING,
    Author: DataTypes.STRING,
    Category: DataTypes.STRING,
    Level: DataTypes.STRING,
    IsPremium: DataTypes.BOOLEAN,
  },
  { sequelize, modelName: "Dica" }
);

sequelize.sync({ force: false }).then(() => {
  console.log("Dica table synced");
}).catch((err) => {
  console.log("Error syncing Dica table");
});

exports.Dica = Dica;
