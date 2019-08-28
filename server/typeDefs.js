const { gql } = require('apollo-server');

const typeDefs = gql`
  type LocationData {
    lat: String
    lng: String
    status: String
    locationData: [LocationDataResults]
    deliveryAreas: [String]
  }

  type LocationDataResults {
    formattedAddress: String
    placeId: String
  }

  type Query {
    getLocation(address: String): LocationData
  }
`;

module.exports = typeDefs;
