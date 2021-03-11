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

  const [active, setActive] = useState(history.location.pathname);

  function MDivider() {
    return (
      <Divider
        orientation={renderMobile ? 'vertical' : 'horizontal'}
        variant="middle"
      />
    );
  }

  function tabProps(path: string) {
    return {
      value: path,
      onClick: () => history.push(path),
      className: active === path ? classes.tabActive : '',
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
            <MDivider />
            {authCtx.isAdmin() ? (
              <Tab
                icon={<DashboardOutlined />}
                label={'Dashboard'}
                wrapped
                {...tabProps('/panel/dashboard')}
              />
            ) : (
              <Tab
                icon={<AssignmentOutlined />}
                style={{ flexGrow: 1 }}
                label={'My Registers'}
                wrapped
                {...tabProps('/panel/registers')}
              />
            )}
            {authCtx.isAdmin() && <MDivider />}
            {authCtx.isAdmin() && (
              <Tab
                icon={<PeopleOutline />}
                label={'Users'}
                style={{ flexGrow: 1 }}
                wrapped
                {...tabProps('/panel/users')}
              />
            )}
            <MDivider />
          </Tabs>
        </div>
        <Button
          className={classes.button}
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
