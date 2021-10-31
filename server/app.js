const express = require('express');
const { port, mongoConnectStr } = require('./config');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { users, settings } = require('./router');

const app = express();

mongoose.connect(mongoConnectStr, () => {
  console.log('Connected to Mongodb');
});

app.use(cors());
app.use(bodyParser.json());

app.use('/users', users);
app.use('/settings', settings);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
