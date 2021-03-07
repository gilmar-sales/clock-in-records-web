import { makeStyles } from '@material-ui/core';

const drawerWidth = 90;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100vh',
  },
  rootMobile: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  bottomNav: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  panel: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
  },
  content: {
    flexGrow: 1,
    marginLeft: drawerWidth,
  },
  contentMobile: {
    flexGrow: 1,
  },
  logo: {
    padding: theme.spacing(2),
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
