import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  title: {
    fontFamily: 'Nunito',
    fontSize: '2rem',
  },
  body: {
    width: '100%',
    borderSpacing: theme.spacing(1, 3),
    borderCollapse: 'separate',
  },
}));

export default useStyles;
