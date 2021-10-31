const express = require('express');
const router = express.Router();
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  const users = await User.find();

  res.send(users);
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params['id']);

  res.send(user);
});

router.put('/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params['id'], { settings: req.body.settings }, {
    returnDocument: 'after'
  });

  res.send(updatedUser);
});

module.exports = router;
