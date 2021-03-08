import { Box, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { Register } from '../../../@types/register';

import useStyles from './styles';

interface RegisterItemProps {
  register: Register;
}

const RegisterItem: React.FC<RegisterItemProps> = ({ register, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.cell}>
        <div className={classes.decoration}></div>
        <div>
          {register.user.name}
          {Number(1).toString().padStart(3, '0')}
        </div>
      </div>
      <div className={classes.cell}>
        {`${register.date.toLocaleDateString('en-US', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}`}
      </div>
      <div className={classes.cell}>
        {`${register.date.toLocaleString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
        })}h`}
      </div>
    </Box>
  );
};

export default RegisterItem;
