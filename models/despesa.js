const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connections/mysql").sequelize;
const { User } = require("./user"); 

class Despesa extends Model {}

Despesa.init(
  {
    DespesaID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UserID: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'UserID',
      },
    },
    Date: DataTypes.DATE,
    Amount: DataTypes.DECIMAL(10, 2),
    Category: DataTypes.STRING,
    Description: DataTypes.TEXT,
    Type: DataTypes.STRING,
    PaymentMethod: DataTypes.STRING,
    Voucher: DataTypes.STRING,
  },
  { sequelize, modelName: "Despesa" }
);

sequelize.sync({ force: false }).then(() => {
  console.log("Despesa table synced");
}).catch((err) => {
  console.log("Error syncing Despesa table");
});

exports.Despesa = Despesa;
