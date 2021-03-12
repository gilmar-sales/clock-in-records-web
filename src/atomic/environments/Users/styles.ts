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
  backdrop: {
    zIndex: 100,
  },
  drawer: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
  },
  title: {
    fontWeight: 100,
    padding: theme.spacing(0, 3, 2),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  form: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  fields: {
    padding: theme.spacing(2, 6),
  },
  userName: {
    fontWeight: 400,
  },
  date: {
    width: 200,
    padding: theme.spacing(2, 0),
  },
  bottom: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
    padding: '1rem',
  },
}));

export default useStyles;
