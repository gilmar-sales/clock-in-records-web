import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core';
import MuiAlert, { Color } from '@material-ui/lab/Alert';
import { gql, useMutation } from '@apollo/client';

import LogoIcon from '../../atoms/LogoIcon';

import useStyles from './styles';
import AuthContext from '../../../contexts/auth';
import { TokenPayload } from '../../../@types/token-payload';

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      user {
        id
        name
        email
        role
      }
      token
    }
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isFeedbackOpen, setFeebackOpen] = useState(false);
  const [requestMessage, setRequestMessage] = useState('');
  const [requestSeverity, setRequestSeverity] = useState<Color>();
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  const classes = useStyles();
  const theme = useTheme();
  const authCtx = useContext(AuthContext);

  const [login] = useMutation(LOGIN);

  const showMessage = (severity: Color, message: string) => {
    if (intervalId !== undefined) clearInterval(intervalId);

    setRequestSeverity(severity);
    setRequestMessage(message);
    setFeebackOpen(true);
    setIntervalId(setInterval(() => setFeebackOpen(false), 3000));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login({ variables: { email, password } })
      .then((response) => {
        console.log(response.data.login as TokenPayload);
        authCtx.handleLogin(response.data.login as TokenPayload);

        showMessage('success', 'Successfully logged in');
      })
      .catch((error) => {
        showMessage('error', error.message);
      });
  };

  return (
    <Grid
      container
      component="main"
      className={classes.root}
      alignItems="center"
      justify="space-between"
    >
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        open={isFeedbackOpen}
      >
        <MuiAlert severity={requestSeverity}>{requestMessage}</MuiAlert>
      </Snackbar>
      <Grid item xs={12} md={6} className={classes.logo}>
        <LogoIcon width={200} height={200} color={theme.palette.primary.main} />
        <Typography variant="h3">Register</Typography>
        <Box display="flex">
          <Typography color="secondary" noWrap>
            {'A C C E S S'}
          </Typography>
          <Typography color="secondary" noWrap style={{ marginLeft: '1rem' }}>
            {'C O N T R O L'}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={5} className={classes.content}>
        <Paper component={Paper} elevation={0} square className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              color="secondary"
              autoComplete="email"
              autoFocus
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
              color="secondary"
              autoComplete="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
