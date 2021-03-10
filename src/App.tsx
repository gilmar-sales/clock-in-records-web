import React from 'react';
import { Box } from '@material-ui/core';
import { ApolloProvider } from '@apollo/client';

import api from './services/api';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/auth';

function App() {
  return (
    <Box>
      <ApolloProvider client={api}>
        <BrowserRouter>
          <AuthContextProvider>
            <Routes />
          </AuthContextProvider>
        </BrowserRouter>
      </ApolloProvider>
    </Box>
  );
}

export default App;
