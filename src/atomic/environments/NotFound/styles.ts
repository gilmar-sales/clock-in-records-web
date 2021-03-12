import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: { display: 'flex', alignItems: 'flex-start' },
  paragraph: {
    padding: theme.spacing(3),
    maxWidth: '80%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
    },
  },
}));

export default useStyles;
