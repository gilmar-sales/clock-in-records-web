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

const UserList: React.FC<UserListProps> = () => {
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
          <TableRow className={classes.bodyRow}>
            <TableCell className={classes.firstCell}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className={classes.decoration} />
                <div className={classes.name}>
                  Gilmar
                  <div className={classes.number}>001</div>
                </div>
              </div>
            </TableCell>
            <TableCell className={classes.bodyCell}>
              <span className={classes.date}>gilmar_custodio_@hotmail.com</span>
            </TableCell>
            <TableCell className={classes.lastCell}>
              <span className={classes.hour}>Collaborator</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
