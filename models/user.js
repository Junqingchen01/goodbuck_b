const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connections/mysql").sequelize;

class User extends Model {}

User.init(
  {
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Avatar: DataTypes.STRING,
    CurrencyUnit: DataTypes.STRING,
    AccountType: DataTypes.STRING,
  },
  { sequelize, modelName: "User" }
);

sequelize.sync({ force: false }).then(() => {
  console.log("User table synced");
}).catch((err) => {
  console.log("Error syncing User table");
});

exports.User = User;
