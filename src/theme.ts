import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#39E991', contrastText: 'white' },
    secondary: { main: '#219653' },
  },
  typography: {
    fontFamily: 'Montserrat',
    button: {
      fontWeight: 600,
    },
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
  },
});

export default theme;
