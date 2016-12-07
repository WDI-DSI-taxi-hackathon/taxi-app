const fetch = require('node-fetch');

function getData(req, res, next) {
    data = [{"Avg_spd": 15.46, "tip_amount": 1.83, "total_amount": 17.0, "trip_distance": 3.6, "trip_count": 345345.0},
    {"Avg_spd": 4.46, "tip_amount": 9.83, "total_amount": 23.0, "trip_distance": 15.6, "trip_count": 3345.0}
    ];
    res.taxi = data
    console.log('res.taxi is:', data)
    next();
  }


module.exports = { getData };