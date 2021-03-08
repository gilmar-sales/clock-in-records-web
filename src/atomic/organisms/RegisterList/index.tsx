import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import RegisterItem from '../../molecules/RegisterItem';

import useStyles from './styles';
import { Register } from '../../../@types/register';

const RegisterList: React.FC = (props) => {
  const classes = useStyles();

  const registers: Register[] = [
    { user: { id: 1, name: 'Gilmar', email: '' }, date: new Date(Date.now()) },
    { user: { id: 2, name: 'Paulo', email: '' }, date: new Date(Date.now()) },
  ];

  return (
    <TableContainer className={classes.container}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headCell}>Collaborator</TableCell>

            <TableCell className={classes.headCell}>Date</TableCell>

            <TableCell className={classes.headCell}>Hour</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {registers.map((register, index) => (
            <RegisterItem key={index} register={register} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RegisterList;
