import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  rootMobile: {
    display: 'flex',
    flexDirection: 'column-reverse',
    height: '100vh',
  },
  panel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  panelMobile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  content: {
    flexGrow: 1,
    overflow: 'auto',
  },
  logo: {
    padding: theme.spacing(0.8),
  },
  divider: {
    margin: theme.spacing(1, 0, 1),
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuMobile: {
    display: 'flex',
    alignItems: 'center',
  },
  tabActive: {
    color: theme.palette.secondary.main,
    transform: 'scale(1.05)',
    transition: 'transform .3s ease',
  },
  button: {
    borderRadius: 0,
    padding: theme.spacing(3),
    borderLeft: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      borderTop: `1px solid ${theme.palette.divider}`,
      borderLeft: 0,
    },
  },
}));

export default useStyles;
