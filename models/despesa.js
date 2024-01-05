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
    Category: DataTypes.STRING,
    Description: DataTypes.TEXT,
    PaymentMethod: DataTypes.STRING,
    
  },
  { sequelize, modelName: "Despesa" }
);

User.hasMany(Despesa, { foreignKey: 'UserID' });
Despesa.belongsTo(User, { foreignKey: 'UserID' });

sequelize.sync({ force: false }).then(() => {
  console.log("Despesa table synced");
}).catch((err) => {
  console.log("Error syncing Despesa table");
});

exports.Despesa = Despesa;
