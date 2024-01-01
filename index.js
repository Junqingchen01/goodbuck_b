const express = require("express");
const { query, param, body, validationResult } = require("express-validator");
const app = express();
const port = process.env.PORT || 3000;

//import routes
const dashboard = require('./routes/dashboardRouter');
const despesas = require('./routes/despesasRouter');
const dica = require('./routes/dicaRouter');
const metas = require('./routes/metasRouter');
const notifications = require('./routes/notificationsRouter');
const perfil = require('./routes/perfilRouter');
const premium = require('./routes/premiumRouter');
const setting = require('./routes/settingRouter');

const mysqlConn = require("./connections/mysql").sequelize;
app.use(express.json());

app.get('/', function (req, res) {
  res.status(200).json({message:'GoodBuck system home page!'});
});


//rotes
// DASHBOARD
app.use('/dashboard',dashboard);

//DESPESAS
app.use('/despesas',despesas);

//DICA
app.use('/dica',dica);

//META
app.use('/metas',metas);

//NOTIFICATIONS
app.use('/notifications',notifications);

//PERFILL OU LOGIN
app.use('/perfil', perfil);
app.use('/login', perfil);

//PREMIUM
app.use('/premium',premium);

//SETTING
app.use('/setting',setting);


app.listen(port, () => {
    console.log("App is running on port " + port);
  
    mysqlConn
      .authenticate()
      .then(() => {
        console.log("Connected to mysql database");
      })
      .catch((err) => {
        console.log("Error connecting to the database");
      });
  });
  
  module.exports = app;