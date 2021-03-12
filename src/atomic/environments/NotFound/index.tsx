import { Button, Container, Typography, useTheme } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import LogoIcon from '../../atoms/LogoIcon';
import useStyles from './styles';

const NotFound: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div>
        <div className={classes.row}>
          <LogoIcon
            width={200}
            height={200}
            color={theme.palette.primary.main}
          />
          <div>
            <Typography variant="h1">404</Typography>

            <Typography variant="h3">OH NO! You're lost.</Typography>
            <Typography className={classes.paragraph}>
              The page you are looking for doesn't exists. But you can go back
              to work by clicking in the button bellow
            </Typography>
            <Link to="/">
              <Button variant="contained" color="secondary">
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
