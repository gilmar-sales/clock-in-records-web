import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';

import { Register } from '../../../@types/register';
import RegisterList from '../../organisms/RegisterList';

import useStyles from './styles';

const LIST_USER_REGISTERS = gql`
  query listUserRegisters {
    listUserRegisters {
      id
      timeRegistered
      user {
        id
        name
      }
    }
  }
`;

const Registers: React.FC = () => {
  const [registers, setRegisters] = useState<Register[]>([]);
  const classes = useStyles();
  const { data } = useQuery(LIST_USER_REGISTERS);

  useEffect(() => {
    if (data) {
      setRegisters(data.listUserRegisters);
    }
  }, [data]);

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
