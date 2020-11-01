const cities = require('../data/cities.json');
cities.sort()

exports.renderIndex = (req, res) => {
    res.render("index", {cities});
  };
  