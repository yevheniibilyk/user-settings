const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  type: {
    type: String,
    enum : ['STRING', 'NUMBER', 'CHECKBOX', 'DROPDOWN', 'RADIO'],
    default: 'STRING'
  },
  values: [String]
});

module.exports = mongoose.model('Setting', settingSchema);
