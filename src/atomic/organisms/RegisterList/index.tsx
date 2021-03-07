import React from 'react';
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import RegisterItem from '../../molecules/RegisterItem';

import useStyles from './styles';

const RegisterList: React.FC = () => {
  const classes = useStyles();
  return (
    <table className={classes.root}>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography variant="h4">Collaborator</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="h4">Date</Typography>
          </TableCell>
          <TableCell align="right">
            <Typography variant="h4">Hour</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <RegisterItem user="Gilmar" data={new Date(Date.now())} />
        <RegisterItem user="Gilmar" data={new Date(Date.now())} />
        <RegisterItem user="Gilmar" data={new Date(Date.now())} />
        <RegisterItem user="Gilmar" data={new Date(Date.now())} />
      </TableBody>
    </table>
  );
};

export default RegisterList;
