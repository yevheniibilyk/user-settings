const express = require('express');
const router = express.Router();
const { Setting } = require('../db/models');

router.get('/', async (req, res) => {
  const settings = await Setting.find();

  res.send(settings);
});

// Create new setting
router.post('/', async (req, res) => {
  const setting = new Setting(req.body.setting);

  await setting.save();

  res.send(setting);
});

// Update setting
router.put('/:id', async (req, res) => {
  const updatedSetting = await Setting.findByIdAndUpdate(req.params['id'], req.body.setting, {
    new: true
  });

  res.send(updatedSetting);
});

router.delete('/:id', async (req, res) => {
  await Setting.findByIdAndRemove(req.params['id'])

  res.sendStatus(200);
});

module.exports = router;
