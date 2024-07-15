// const { Country, State, City } = require('country-state-city');
// Import the 'fs' module
const fs = require('fs');

// function getCountryData() {
//   return Country.getAllCountries().map(country => {
//     const states = State.getStatesOfCountry(country.isoCode).map(state => {
//       const cities = City.getCitiesOfState(country.isoCode, state.isoCode).map(city => ({
//         name: city.name,
//         lat: city.latitude,
//         long: city.longitude
//       }));
//       return {
//         name: state.name,
//         cities
//       };
//     });

//     return {
//       name: country.name,
//       isoCode: country.isoCode,
//       lat: country.latitude,
//       long: country.longitude,
//       states
//     };
//   });
// }


// const countryDataList = getCountryData();

// fs.writeFileSync('countries.json', JSON.stringify(countryDataList, null, 2));

// console.log('Country data has been saved to countries.json');

  