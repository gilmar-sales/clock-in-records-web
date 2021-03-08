import React, { useState } from 'react';
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
            indicatorColor="secondary"
            orientation={renderMobile ? 'horizontal' : 'vertical'}
          >
            <Divider variant="fullWidth" className={classes.divider} />
            <Tab
              icon={<DashboardOutlined />}
              label={'Dashboard'}
              value={0}
              {...a11yProps(0)}
              className={active === 0 ? classes.tabActive : ''}
              style={{ flexGrow: 1 }}
            />
            <Divider variant="fullWidth" className={classes.divider} />
            <Tab
              icon={<AssignmentOutlined />}
              label={'Meus Registros'}
              wrapped
              value={1}
              {...a11yProps(1)}
              className={active === 1 ? classes.tabActive : ''}
              style={{ flexGrow: 1 }}
            />
          </Tabs>
        </div>
        <Button
          className={renderMobile ? classes.buttonMobile : classes.button}
        >
          <ExitToApp />
        </Button>
      </div>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default TabsPanel;
