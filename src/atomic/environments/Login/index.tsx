import React, { useContext } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core';
import { gql, useMutation } from '@apollo/client';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import LogoIcon from '../../atoms/LogoIcon';

import useStyles from './styles';
import AuthContext from '../../../contexts/auth';
import { TokenPayload } from '../../../@types/token-payload';
import { Redirect } from 'react-router';

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

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const Login: React.FC = () => {
  const { control, errors, handleSubmit, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const classes = useStyles();
  const theme = useTheme();
  const authCtx = useContext(AuthContext);

  const [login] = useMutation(LOGIN);

  const onSubmit = (data: any) => {
    login({ variables: data })
      .then((response) => {
        authCtx.handleLogin(response.data.login as TokenPayload);
      })
      .catch((error) => {
        const [field, message] = error.message.split(':');
        setError(field, { message });
      });
  };

  if (authCtx.isAuthenticated()) {
    if (authCtx.isAdmin()) return <Redirect to="/panel/dashboard" />;

    return <Redirect to="/panel/registers" />;
  }

  return (
    <Grid
      container
      component="main"
      className={classes.root}
      alignItems="center"
      justify="space-between"
    >
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              as={TextField}
              variant="outlined"
              name="email"
              label="Email"
              defaultValue=""
              fullWidth
              required
              color={!errors.email ? 'secondary' : undefined}
              control={control}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <Controller
              as={TextField}
              variant="outlined"
              margin="normal"
              label="Password"
              type="password"
              name="password"
              defaultValue=""
              fullWidth
              required
              color={!errors.password ? 'secondary' : undefined}
              control={control}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
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
