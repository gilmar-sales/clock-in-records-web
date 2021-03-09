import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { Register } from '../../../@types/register';

import useStyles from './styles';

interface RegisterItemProps {
  register: Register;
}

const RegisterItem: React.FC<RegisterItemProps> = ({ register }) => {
  const classes = useStyles();

  return (
    <TableRow className={classes.bodyRow}>
      <TableCell className={classes.firstCell}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className={classes.decoration} />
          <div className={classes.name}>
            {register.user.name}
            <div className={classes.number}>
              {Number(register.user.id).toString().padStart(3, '0')}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className={classes.bodyCell}>
        <span className={classes.date}>
          {`${new Date(register.timeRegistered).toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}`}
        </span>
      </TableCell>
      <TableCell className={classes.lastCell}>
        <span className={classes.hour}>
          {`${new Date(register.timeRegistered).toLocaleString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
          })}h`}
        </span>
      </TableCell>
    </TableRow>
  );
};

export default RegisterItem;
