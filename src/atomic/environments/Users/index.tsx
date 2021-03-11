import React, { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import {
  Backdrop,
  Button,
  Drawer,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';

import { User } from '../../../@types/user';
import UserList from '../../organisms/UserList';

import useStyles from './styles';

const LIST_USERS = gql`
  query listUsers {
    listUsers {
      id
      name
      email
      role
    }
  }
`;

const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    createUser(
      data: { name: $name, email: $email, password: $password, role: $role }
    ) {
      id
      name
      email
      role
    }
  }
`;

const Users: React.FC = () => {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('collaborator');

  // const users: User[] = [
  //   { id: 1, name: 'Gilmar', email: '', role: 'admin' },
  //   { id: 2, name: 'Paulo', email: '', role: 'admin' },
  // ];

  const { data } = useQuery(LIST_USERS);
  const [createUser] = useMutation(CREATE_USER);

  useEffect(() => {
    if (data) {
      setUsers(data.listUsers);
    }
  }, [data]);

  const handleSubmit = () => {
    setDrawerOpen(false);

    createUser({ variables: { name, email, password, role } })
      .then((response) => {
        setUsers([response.data.createUser, ...users]);
      })
      .catch((error) => {
        console.log(error);
      });

    setName('');
    setEmail('');
    setPassword('');
    setRole('collaborator');
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
            <h2 className={classes.title}>New User</h2>
            <div className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                color="secondary"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                color="secondary"
                autoComplete="email"
                value={email}
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <FormControl
                variant="outlined"
                fullWidth
                color="secondary"
                style={{ marginTop: 16 }}
              >
                <InputLabel>Role</InputLabel>
                <Select
                  label="Role"
                  value={role}
                  onChange={(event) => setRole(String(event.target.value))}
                >
                  <MenuItem value={'collaborator'}>Collaborator</MenuItem>
                  <MenuItem value={'administrator'}>Administrator</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className={classes.bottom}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              disabled={Boolean(
                name.length === 0 || email.length === 0 || password.length < 6,
              )}
              onClick={handleSubmit}
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
          onClick={() => setDrawerOpen(true)}
        >
          Create
        </Button>
      </div>
      <div className={classes.listContainer}>
        <UserList data={users} />
      </div>
    </div>
  );
};

export default Users;
