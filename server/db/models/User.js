const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  settings: JSON
});

module.exports = mongoose.model('User', userSchema);
