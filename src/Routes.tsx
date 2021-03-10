import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TabsPanel from './atomic/ecosystems/TabsPanel';

import LoginEnvironment from './atomic/environments/Login';
import RegistersEnvironment from './atomic/environments/Registers';
import DashboardEnvironment from './atomic/environments/Dashboard';
import UsersEnvironment from './atomic/environments/Users';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LoginEnvironment} />
      <Route
        path="/panel"
        component={({ match }: { match: any }) => (
          <TabsPanel>
            <Route
              path={`${match.path}/registers`}
              component={RegistersEnvironment}
            />
            <Route
              path={`${match.path}/dashboard`}
              component={DashboardEnvironment}
            />
            <Route path={`${match.path}/users`} component={UsersEnvironment} />
          </TabsPanel>
        )}
      />
    </Switch>
  );
}
