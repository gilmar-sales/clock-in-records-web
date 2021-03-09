import React, { useContext, useState } from 'react';
import {
  Button,
  Divider,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

import {
  AssignmentOutlined,
  DashboardOutlined,
  PeopleOutline,
  ExitToApp,
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../../contexts/auth';

import useStyles from './styles';
import LogoIcon from '../../atoms/LogoIcon';

const TabsPanel: React.FC = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const renderMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [active, setActive] = useState(() => {
    switch (history.location.pathname) {
      case '/panel/dashboard':
        return 0;
      case '/panel/registers':
        return 0;
      case '/panel/users':
        return 1;
    }
  });

  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  return (
    <div className={renderMobile ? classes.rootMobile : classes.root}>
      <div className={renderMobile ? classes.panelMobile : classes.panel}>
        <div className={renderMobile ? classes.menuMobile : classes.menu}>
          <div className={classes.logo}>
            <LogoIcon
              width={48}
              height={48}
              color={theme.palette.primary.main}
            />
          </div>
          <Tabs
            TabIndicatorProps={{
              style: renderMobile
                ? {
                    height: 4,
                  }
                : {
                    width: 4,
                  },
            }}
            value={active}
            onChange={(event, newValue) => {
              setActive(newValue);
            }}
            orientation={renderMobile ? 'horizontal' : 'vertical'}
          >
            <Divider className={classes.divider} />
            {authCtx.isAdmin() ? (
              <Tab
                icon={<DashboardOutlined />}
                label={'Dashboard'}
                value={0}
                {...a11yProps(0)}
                className={active === 0 ? classes.tabActive : ''}
                style={{ flexGrow: 1 }}
                onClick={() => history.push('/panel/dashboard')}
              />
            ) : (
              <Tab
                icon={<AssignmentOutlined />}
                label={'My Registers'}
                wrapped
                value={0}
                {...a11yProps(0)}
                className={active === 0 ? classes.tabActive : ''}
                style={{ flexGrow: 1 }}
                onClick={() => history.push('/panel/registers')}
              />
            )}
            <Divider className={classes.divider} />
            {authCtx.isAdmin() && (
              <Tab
                icon={<PeopleOutline />}
                label={'Users'}
                wrapped
                value={1}
                {...a11yProps(1)}
                className={active === 1 ? classes.tabActive : ''}
                style={{ flexGrow: 1 }}
                onClick={() => history.push('/panel/users')}
              />
            )}
            {authCtx.isAdmin() && <Divider className={classes.divider} />}
          </Tabs>
        </div>
        <Button
          className={renderMobile ? classes.buttonMobile : classes.button}
          onClick={() => authCtx.handleLogout()}
        >
          <ExitToApp />
        </Button>
      </div>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default TabsPanel;
