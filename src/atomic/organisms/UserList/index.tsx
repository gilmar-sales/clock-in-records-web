import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import useStyles from './styles';
import { User } from '../../../@types/user';

interface UserListProps {
  data: User[];
}

const UserList: React.FC<UserListProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container}>
      <Table size="small" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.headCell}>Name</TableCell>

            <TableCell className={classes.headCell}>Email</TableCell>

            <TableCell className={classes.headCell}>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id} className={classes.bodyRow}>
              <TableCell className={classes.firstCell}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className={classes.decoration} />
                  <div className={classes.name}>
                    {user.name}
                    <div className={classes.number}>
                      {Number(user.id).toString().padStart(3, '0')}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className={classes.bodyCell}>
                <span className={classes.date}>{user.email}</span>
              </TableCell>
              <TableCell className={classes.lastCell}>
                <span className={classes.hour}>{user.role}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
