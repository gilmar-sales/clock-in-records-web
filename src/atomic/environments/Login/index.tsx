import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import LogoIcon from '../../atoms/LogoIcon';

import useStyles from './styles';

const Login: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

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
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              color="secondary"
              autoComplete="password"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
