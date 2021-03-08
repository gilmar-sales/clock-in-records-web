import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    minHeight: '100vh',
    backgroundColor: theme.palette.text.primary,
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    color: theme.palette.primary.contrastText,
  },
  content: {
    display: 'flex',
    height: '90vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6),
    userSelect: 'none',
    backgroundImage: `url(shape.svg)`,
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  paper: {
    width: '100%',
    padding: theme.spacing(4),
    borderRadius: '2rem',
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
    padding: theme.spacing(1.5),
  },
}));

export default useStyles;
