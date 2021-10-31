const mongoose = require('mongoose');
const { mongoConnectStr } = require('../config');
const { Setting, User } = require('./models');

const settingsData = [{
  name: 'email',
  type: 'STRING'
}, {
  name: 'gender',
  type: 'RADIO',
  values: ['male', 'female']
}, {
  name: 'age',
  type: 'NUMBER'
}, {
  name: 'subscription enabled',
  type: 'CHECKBOX'
}, {
  name: 'position',
  type: 'DROPDOWN',
  values: ['Developer', 'Manager', 'CEO', 'CTO']
}];

(async () => {
  try {
    await mongoose.connect(mongoConnectStr);

    const savedSettings = await Setting.insertMany(settingsData);

    const usersData = [{
      name: 'John',
      settings: {
        [savedSettings[0]._id]: 'john@gmail.com',
        [savedSettings[2]._id]: 28,
        [savedSettings[4]._id]: 'Developer'
      }
    }, {
      name: 'Anna',
      settings: {
        [savedSettings[1]._id]: 'female',
        [savedSettings[2]._id]: 25,
        [savedSettings[3]._id]: true
      }
    }, {
      name: 'Andy',
      settings: {
        [savedSettings[0]._id]: 'andy@gmail.com',
        [savedSettings[1]._id]: 'male',
        [savedSettings[2]._id]: 28,
        [savedSettings[3]._id]: false,
        [savedSettings[4]._id]: 'Manager'
      }
    }];

    await User.insertMany(usersData);

  } catch (e) {
    console.log(e);
  }

  process.exit(0);
})();
