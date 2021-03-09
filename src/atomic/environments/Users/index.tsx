import { Button } from '@material-ui/core';
import React from 'react';
import { User } from '../../../@types/user';
import UserList from '../../organisms/UserList';

import useStyles from './styles';

const Users: React.FC = () => {
  const classes = useStyles();

  const users: User[] = [
    { id: 1, name: 'Gilmar', email: '', role: 'admin' },
    { id: 2, name: 'Paulo', email: '', role: 'admin' },
  ];

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
