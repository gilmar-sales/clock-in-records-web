import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '1rem',
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  decoration: {
    width: 5,
    height: 35,
    backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing(6),
    borderRadius: '1rem',
  },
  cell: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
