import { ApolloClient, InMemoryCache } from '@apollo/client';

const api = new ApolloClient({
  uri: 'http://192.168.1.4:3333/graphql',
  cache: new InMemoryCache(),
});

export default api;
