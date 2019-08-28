import client from './graph/client';
import { CHECK_LOCATION } from './graph/queries';

const checkLocation = async (address, handleDataChange) => {
  const results = await client.query({
    query: CHECK_LOCATION,
    variables: { address },
  });

  const { getLocation } = results.data

  handleDataChange(getLocation.deliveryAreas);
};

export default checkLocation;
