import React from 'react';
import { Box } from '@material-ui/core';
import { ApolloProvider } from '@apollo/client';

import api from './services/api';
import Routes from './Routes';

function App() {
  return (
    <Box>
      <ApolloProvider client={api}>
        <Routes />
      </ApolloProvider>
    </Box>
  );
}

export default App;
