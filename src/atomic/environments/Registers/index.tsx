import React, { useEffect, useState } from 'react';
import {
  Backdrop,
  Button,
  Drawer,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { gql, useMutation, useQuery } from '@apollo/client';

import { Register } from '../../../@types/register';
import RegisterList from '../../organisms/RegisterList';

import useStyles from './styles';

const LIST_USER_REGISTERS = gql`
  query listUserRegisters {
    listUserRegisters {
      id
      timeRegistered
      type
      user {
        id
        name
      }
    }
  }
`;

const CREATE_REGISTER = gql`
  mutation createRegister($date: DateTime!, $type: String!) {
    createRegister(timeRegistered: $date, type: $type) {
      id
      timeRegistered
      type
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

  const [date, setDate] = useState(new Date());
  const [type, setType] = useState('in');

  useEffect(() => {
    if (data) {
      setRegisters(data.listUserRegisters);
    }
  }, [data]);

  const handleSubmit = () => {
    setDrawerOpen(false);

    createRegister({ variables: { date, type } })
      .then((response) => {
        setRegisters([response.data.createRegister, ...registers]);
      })
      .catch((error) => {
        console.log(error);
      });

    setDate(new Date());
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
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDateTimePicker
                  className={classes.date}
                  variant="inline"
                  color="secondary"
                  value={date}
                  onChange={(value) => setDate(value as Date)}
                />
              </MuiPickersUtilsProvider>

              <div>Type</div>
              <Select
                value={type}
                color="secondary"
                onChange={(event) => setType(String(event.target.value))}
              >
                <MenuItem value={'in'}>In</MenuItem>
                <MenuItem value={'out'}>Out</MenuItem>
              </Select>
            </div>
          </div>
          <div className={classes.bottom}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
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
