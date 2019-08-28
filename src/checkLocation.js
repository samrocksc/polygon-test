import client from './graph/client';
import { CHECK_LOCATION } from './graph/queries';

/**
 * runs the CheckLocation function in our graphql queries
 * @param {string} address - a string representing an address
 * @param {function} handleDataChange - function used for changing state
 */
const checkLocation = async (address, handleDataChange) => {
  const results = await client.query({
    query: CHECK_LOCATION,
    variables: { address },
  });

  const { getLocation } = results.data

  handleDataChange(getLocation.deliveryAreas);
};

export default checkLocation;
