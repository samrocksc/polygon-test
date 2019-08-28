import gql from 'graphql-tag';

export const CHECK_LOCATION = gql`
  query CheckLocation($address: String) {
    getLocation(address: $address) {
      status
      deliveryAreas
      locationData {
        placeId
        formattedAddress
      }
    }
  }
`;
