import React, { useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Divider,
  Tab,
  Tabs,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import {
  AssignmentOutlined,
  DashboardOutlined,
  ExitToApp,
} from '@material-ui/icons';

import useStyles from './styles';
import LogoIcon from '../../atoms/LogoIcon';

const TabsPanel: React.FC = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const renderMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [active, setActive] = useState(0);

  function a11yProps(index: number) {
    console.log(index);
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  if (renderMobile)
    return (
      <div className={classes.rootMobile}>
        <div className={classes.content}>{props.children}</div>
        <BottomNavigation
          value={active}
          onChange={(event, newValue) => {
            setActive(newValue);
          }}
          showLabels
          className={classes.bottomNav}
        >
          <BottomNavigationAction
            label="Dashboard"
            icon={<DashboardOutlined />}
          />
          <BottomNavigationAction
            label="Meus Registros"
            icon={<AssignmentOutlined />}
          />
        </BottomNavigation>
      </div>
    );

  return (
    <div className={classes.root}>
      <div className={classes.panel}>
        <div className={classes.menu}>
          <div className={classes.logo}>
            <LogoIcon width={48} height={48} color="#39E991" />
          </div>
          <Tabs
            orientation="vertical"
            value={active}
            onChange={(event, newValue) => {
              setActive(newValue);
            }}
          >
            <Divider variant="fullWidth" />
            <Tab
              icon={<DashboardOutlined />}
              label={'Dashboard'}
              value={0}
              {...a11yProps(0)}
              className={active === 0 ? classes.tabActive : ''}
            />
            <Divider variant="fullWidth" />
            <Tab
              icon={<AssignmentOutlined />}
              label={'Meus Registros'}
              wrapped
              value={1}
              {...a11yProps(1)}
              className={active === 1 ? classes.tabActive : ''}
            />
          </Tabs>
        </div>
        <Button className={classes.button}>
          <ExitToApp />
        </Button>
      </div>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default TabsPanel;
