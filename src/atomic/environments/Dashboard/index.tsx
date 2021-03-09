import { gql, useQuery, useSubscription } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Register } from '../../../@types/register';
import RegisterList from '../../organisms/RegisterList';

import useStyles from './styles';

const LIST_REGISTERS = gql`
  query listRegisters {
    listRegisters {
      id
      timeRegistered
      user {
        id
        name
        email
        role
      }
    }
  }
`;

const Dashboard: React.FC = () => {
  const [registers, setRegisters] = useState<Register[]>([]);
  const classes = useStyles();
  const { data } = useQuery(LIST_REGISTERS);

  useEffect(() => {
    if (data) {
      setRegisters(data.listRegisters);
    }
  }, [data]);

  return (
    <div className={classes.root}>
      <div className={classes.listContainer}>
        <RegisterList registers={registers} />
      </div>
    </div>
  );
};

export default Dashboard;
