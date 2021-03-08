import React from 'react';
import { Box, Container } from '@material-ui/core';

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
    <Container className={classes.container}>
      <Box className={classes.header}>
        <div className={classes.title}>Collaborator</div>
        <div className={classes.title}>Date</div>
        <div className={classes.title}>Hour</div>
      </Box>
      <Box className={classes.body}>
        {registers.map((register, index) => (
          <RegisterItem key={index} register={register} />
        ))}
      </Box>
    </Container>
  );
};

export default RegisterList;
