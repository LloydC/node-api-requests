const cities = require('cities.json');
const countries = require('../data/country-by-abbreviation.json');

exports.renderIndex = (req, res) => {
  // sort cities alphabetically
  const sortedCities = cities.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
console.log(sortedCities[0])
//map country name to cities
 const citiesAndCountries = sortedCities.map(city => {
   const country = countries.find( country => city.country === country.abbreviation)
   return {
     name: city.name,
     country,
     lng: city.lng,
     lat: city.lat
   }
 });
console.log(citiesAndCountries[0])
    res.render("index", {cities: citiesAndCountries});
  };
  