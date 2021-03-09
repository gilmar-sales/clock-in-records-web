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

interface RegisterListProps {
  registers: Register[];
}

const RegisterList: React.FC<RegisterListProps> = ({ registers }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader className={classes.table} size="small">
        <TableHead className={classes.headCell}>
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
