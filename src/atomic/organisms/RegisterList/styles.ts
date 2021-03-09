import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    width: '100%',
    padding: theme.spacing(1),
    overflow: 'auto',
    fontFamily: 'Nunito',
  },
  table: {
    borderCollapse: 'separate',
    borderSpacing: '0 20px',
  },
  headCell: {
    fontSize: '2rem',
    fontFamily: 'Nunito',
    border: 0,
    padding: theme.spacing(2),
  },
}));

export default useStyles;
