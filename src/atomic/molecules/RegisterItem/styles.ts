import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  decoration: {
    width: 4,
    height: 28,
    backgroundColor: '#6FCF97',
    borderRadius: '1rem',
    marginRight: theme.spacing(8),
  },
  bodyRow: {
    boxShadow: theme.shadows[2],
    borderRadius: '1rem',
  },
  firstCell: {
    fontFamily: 'Nunito',
    borderRadius: '1rem 0 0 1rem',
    border: 0,
    backgroundColor: theme.palette.background.paper,
  },
  bodyCell: {
    fontSize: '1.5rem',
    fontFamily: 'Nunito',
    border: 0,
    backgroundColor: theme.palette.background.paper,
  },
  lastCell: {
    fontSize: '1.5rem',
    fontFamily: 'Nunito',
    border: 0,
    borderRadius: '0 1rem 1rem 0',
    backgroundColor: theme.palette.background.paper,
  },
  name: {
    fontSize: '1.5rem',
    lineHeight: '1.5rem',
  },
  number: {
    fontSize: '1rem',
  },
  date: {
    fontSize: '1.6rem',
    color: '#888888',
  },
  hour: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#888888',
  },
}));

export default useStyles;
