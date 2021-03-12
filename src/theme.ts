import { createMuiTheme } from '@material-ui/core';

import { MuiPickersOverrides } from '@material-ui/pickers/typings/overrides';

type overridesNameToClassKey = {
  [P in keyof MuiPickersOverrides]: keyof MuiPickersOverrides[P];
};

declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey extends overridesNameToClassKey {}
}

const theme = createMuiTheme({
  palette: {
    primary: { main: '#39E991', contrastText: '#fff' },
    secondary: { main: '#219653', contrastText: '#fff' },
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#219653',
      },
    },
    MuiPickerDTTabs: {
      tabs: {
        backgroundColor: '#219653',
      },
    },
    MuiPickersDay: {
      daySelected: {
        backgroundColor: '#219653',
      },
      current: {
        color: '#219653',
      },
    },
    MuiPickersClock: {
      pin: {
        backgroundColor: '#219653',
      },
    },
    MuiPickersClockNumber: {
      clockNumberSelected: {
        backgroundColor: '#219653',
      },
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: '#219653',
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: '#219653',
      },
    },
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
