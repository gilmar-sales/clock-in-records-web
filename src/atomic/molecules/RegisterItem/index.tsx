import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';

interface RegisterItemProps {
  user: string;
  data: Date;
}

const RegisterItem: React.FC<RegisterItemProps> = (props) => {
  return (
    <TableRow>
      <TableCell scope="row">{props.user}</TableCell>
      <TableCell align="center">{`${props.data.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })}`}</TableCell>
      <TableCell align="right">{`${props.data.toLocaleString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      })}h`}</TableCell>
    </TableRow>
  );
};

export default RegisterItem;
