import React, { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import {
  Backdrop,
  Button,
  Divider,
  Drawer,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';

import { User } from '../../../@types/user';
import UserList from '../../organisms/UserList';
import * as yup from 'yup';

import useStyles from './styles';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .matches(
      /^[a-zA-Z\s]*$/,
      'name must have only characters between a-z and spaces',
    )
    .required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  role: yup.string().default('collaborator').required(),
});

const Users: React.FC = () => {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const { control, errors, handleSubmit, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('collaborator');

  const { data } = useQuery(LIST_USERS);
  const [createUser] = useMutation(CREATE_USER);

  useEffect(() => {
    if (data) {
      setUsers(data.listUsers);
    }
  }, [data]);

  const onSubmit = (data: any) => {
    console.log(data);

    createUser({ variables: data })
      .then((response) => {
        setUsers([response.data.createUser, ...users]);
        setName('');
        setEmail('');
        setPassword('');
        setRole('collaborator');
        setDrawerOpen(false);
      })
      .catch((error) => {
        const [field, message] = error.message.split(':');
        setError(field, { message });
        console.log(errors);
      });
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
          <h2 className={classes.title}>New User</h2>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.fields}>
              <Controller
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={name}
                defaultValue=""
                color={!errors.name ? 'secondary' : undefined}
                control={control}
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />
              <Controller
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={email}
                defaultValue=""
                color={!errors.email ? 'secondary' : undefined}
                control={control}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
              <Controller
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                value={password}
                defaultValue=""
                color={!errors.password ? 'secondary' : undefined}
                control={control}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
              />
              <FormControl
                variant="outlined"
                fullWidth
                color="secondary"
                style={{ marginTop: 16 }}
              >
                <InputLabel style={{ backgroundColor: 'white' }}>
                  Role
                </InputLabel>
                <Controller
                  as={Select}
                  variant="outlined"
                  required
                  fullWidth
                  id="role"
                  name="role"
                  value={role}
                  defaultValue="collaborator"
                  color={!errors.role ? 'secondary' : undefined}
                  control={control}
                  error={Boolean(errors.role)}
                >
                  <MenuItem value={'collaborator'}>Collaborator</MenuItem>
                  <MenuItem value={'administrator'}>Administrator</MenuItem>
                </Controller>
              </FormControl>
            </div>
            <div>
              <Divider />
              <div className={classes.bottom}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  fullWidth
                >
                  Create
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
            </div>
          </form>
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
