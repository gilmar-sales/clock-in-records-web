import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new WebSocketLink({
  uri: 'ws://192.168.1.4:3333/graphql', // use wss for a secure endpoint
  options: {
    reconnect: true,
  },
});

const httpLink = createHttpLink({
  uri: 'http://192.168.1.4:3333/graphql',
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const authLink = setContext((_, { headers }) => {
  const { token } = JSON.parse(localStorage.getItem('@token_payload') || '{}');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const api = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(splitLink),
});

export default api;
