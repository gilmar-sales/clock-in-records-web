import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#39E991', contrastText: 'white' },
    secondary: { main: '#219653', contrastText: 'white' },
  },
  typography: {
    fontFamily: 'Montserrat',
    button: {
      fontWeight: 600,
      textTransform: 'capitalize',
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
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
  },
});

export default theme;
