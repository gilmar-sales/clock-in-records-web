import { makeStyles } from '@material-ui/core';

const drawerWidth = 90;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  rootMobile: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  bottomNav: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  panel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  content: {
    flexGrow: 1,
  },
  logo: {
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(1, 0, 1),
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabActive: {
    width: drawerWidth,
    color: theme.palette.primary.main,
    transform: 'scale(1.05)',
    marginTop: 2,
    transition: 'transform .3s ease',
  },
  button: {
    width: '100%',
    borderRadius: 0,
    margin: 0,
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

export default useStyles;
