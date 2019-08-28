const getLoc = require('./getLoc');

const resolvers = {
  Query: {
    getLocation: async (parent, args) => {
      const { address } = args;
      return getLoc(address);
    },
  },
};

module.exports = resolvers;
