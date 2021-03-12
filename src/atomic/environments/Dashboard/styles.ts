import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  listContainer: {
    height: '85vh',
    [theme.breakpoints.up('sm')]: {
      height: '90vh',
    },
    padding: theme.spacing(3),
  },
}));

export default useStyles;
