import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import LogoIcon from '../../atoms/LogoIcon';

import useStyles from './styles';

const Login: React.FC = () => {
  const classes = useStyles();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={7} md={8} className={classes.content}>
        <LogoIcon width={200} height={200} color="#39E991" />
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
      <Grid
        item
        xs={12}
        sm={5}
        md={4}
        component={Paper}
        elevation={6}
        square
        className={classes.content}
      >
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
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
            autoComplete="password"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
