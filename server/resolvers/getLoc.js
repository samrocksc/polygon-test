const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GMAPS_API_KEY,
  Promise: Promise,
});

const inside = require('point-in-polygon');

const polygons = require('../polygons');

/**
 * Accepts the customer's location as an input parameter as an address
 * @param {string} address - the text address
 */
const getAddressLoc = async address => {
  const data = await googleMapsClient.geocode({ address }).asPromise();

  const loc = (data.json.results && data.json.results[0].geometry.location) || '';
  const locArr = [loc.lng, loc.lat];
  // const testingSomething = polygons.map(datum => {
  //   const locArr = [loc.lng, loc.lat];
  //   const isHere = inside(locArr, datum.polygon);
  //   return isHere;
  // });
  const deliveryAreas = polygons.reduce((acc, cur, i) => {
    if (inside(locArr, cur.polygon)) {
      return [...acc, cur.name];
    }
    return acc;
  }, []);
  return {
    ...data,
    lat: loc.lat,
    lng: loc.lng,
    locationData: data.json.results.map(loc => ({
      formattedAddress: loc.formatted_address,
      placeId: loc.place_id,
    })),
    deliveryAreas,
  };
};

module.exports = getAddressLoc;
