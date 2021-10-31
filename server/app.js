const express = require('express');
const { port, mongoConnectStr } = require('./config');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(mongoConnectStr, () => {
  console.log('Connected to Mongodb');
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
