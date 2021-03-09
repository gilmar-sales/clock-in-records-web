import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TabsPanel from './atomic/ecosystems/TabsPanel';

import LoginEnvironment from './atomic/environments/Login';
import RegistersEnvironment from './atomic/environments/Registers';
import DashboardEnvironment from './atomic/environments/Dashboard';
import UsersEnvironment from './atomic/environments/Users';

import { AuthContextProvider } from './contexts/auth';

export default function Routes() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/login" component={LoginEnvironment} />
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
                <Route
                  path={`${match.path}/users`}
                  component={UsersEnvironment}
                />
              </TabsPanel>
            )}
          />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
