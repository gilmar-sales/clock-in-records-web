import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(3),
  },
  listContainer: {
    height: '70vh',
    padding: theme.spacing(3),
  },
  button: {
    fontSize: '1.5rem',
  },
}));

export default useStyles;
