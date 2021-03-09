import React, { useEffect, useState } from 'react';
import { Backdrop, Button, Drawer, TextField } from '@material-ui/core';
import { gql, useMutation, useQuery } from '@apollo/client';

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

const CREATE_REGISTER = gql`
  mutation createRegister($date: DateTime!) {
    createRegister(timeRegistered: $date) {
      id
      timeRegistered
      user {
        id
        name
        email
        role
      }
    }
  }
`;

const Registers: React.FC = () => {
  const [registers, setRegisters] = useState<Register[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  const { data } = useQuery(LIST_USER_REGISTERS);
  const [createRegister] = useMutation(CREATE_REGISTER);

  const [date, setDate] = useState('');

  useEffect(() => {
    if (data) {
      setRegisters(data.listUserRegisters);
    }
  }, [data]);

  const handleSubmit = () => {
    setDrawerOpen(false);

    createRegister({ variables: { date } })
      .then((response) => {
        setRegisters([response.data.createRegister, ...registers]);
      })
      .catch((error) => {
        console.log(error);
      });

    setDate('');
  };

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={isDrawerOpen}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={isDrawerOpen}
          elevation={2}
          classes={{ paper: classes.drawer }}
        >
          <div>
            <h2 className={classes.title}>New Register</h2>
            <div className={classes.form}>
              <div>Collaborator</div>
              <h1 className={classes.userName}>Gilmar</h1>

              <div>Date & Hour</div>
              <TextField
                className={classes.date}
                type="datetime-local"
                color="secondary"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
          </div>
          <div className={classes.bottom}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              disabled={date.length === 0}
              onClick={() => handleSubmit()}
            >
              Register
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={() => setDrawerOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </Drawer>
      </Backdrop>
      <div className={classes.menu}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => setDrawerOpen(!isDrawerOpen)}
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
