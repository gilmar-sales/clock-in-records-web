import { Button } from '@material-ui/core';
import React from 'react';
import { Register } from '../../../@types/register';
import RegisterList from '../../organisms/RegisterList';

import useStyles from './styles';

const Registers: React.FC = () => {
  const classes = useStyles();

  const registers: Register[] = [
    {
      user: { id: 1, name: 'Gilmar', email: '', role: 'admin' },
      date: new Date(Date.now()),
    },
    {
      user: { id: 1, name: 'Gilmar', email: '', role: 'admin' },
      date: new Date(Date.now()),
    },
    {
      user: { id: 1, name: 'Gilmar', email: '', role: 'admin' },
      date: new Date(Date.now()),
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Register
        </Button>
      </div>
      <div className={classes.listContainer}>
        <RegisterList registers={registers} />
      </div>
    </div>
  );
};

export default Registers;
