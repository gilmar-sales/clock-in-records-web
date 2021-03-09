import { gql, useQuery } from '@apollo/client';
import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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

const Users: React.FC = () => {
  const classes = useStyles();
  const [users, setUsers] = useState<User[]>([]);
  // const users: User[] = [
  //   { id: 1, name: 'Gilmar', email: '', role: 'admin' },
  //   { id: 2, name: 'Paulo', email: '', role: 'admin' },
  // ];

  const { data } = useQuery(LIST_USERS);

  useEffect(() => {
    if (data) {
      setUsers(data.listUsers);
      console.log(data.listUsers);
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
