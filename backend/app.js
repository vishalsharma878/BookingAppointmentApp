
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./util/dbpath');

const users = require('./routes/users')

app.use(cors());
app.use(bodyParser.json());


app.use(users);

sequelize
  .sync()
  .then(result => {
 
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
