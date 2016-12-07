const taxi = require('express').Router();
const { getData } = require('../services/taxi');

taxi.get('/', getData, (req, res) => {
  res.json(res.taxi || []);

})

module.exports = taxi;