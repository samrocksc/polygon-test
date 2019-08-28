import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_URI,
});

// const client = new ApolloClient({
//   uri: 'http://localhost:4000',
// });

export default client;
