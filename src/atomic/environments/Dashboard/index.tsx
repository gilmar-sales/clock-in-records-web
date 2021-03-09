import React from 'react';
import { Register } from '../../../@types/register';
import RegisterList from '../../organisms/RegisterList';

import useStyles from './styles';

const Dashboard: React.FC = () => {
  const classes = useStyles();

  const registers: Register[] = [
    {
      id: 1,
      user: { id: 1, name: 'Gilmar', email: '', role: 'admin' },
      timeRegistered: new Date(Date.now()),
    },
    {
      id: 2,
      user: { id: 2, name: 'Paulo', email: '', role: 'admin' },
      timeRegistered: new Date(Date.now()),
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.listContainer}>
        <RegisterList registers={registers} />
      </div>
    </div>
  );
};

export default Dashboard;
