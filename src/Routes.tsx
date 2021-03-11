import React, { useContext } from 'react';
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom';
import TabsPanel from './atomic/ecosystems/TabsPanel';

import LoginEnvironment from './atomic/environments/Login';
import RegistersEnvironment from './atomic/environments/Registers';
import DashboardEnvironment from './atomic/environments/Dashboard';
import UsersEnvironment from './atomic/environments/Users';
import AuthContext from './contexts/auth';

interface ProtectedRouteProps extends RouteProps {
  admin?: boolean;
}

export default function Routes() {
  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    component,
    admin,
    ...rest
  }) => {
    const authCtx = useContext(AuthContext);

    if (!authCtx.isAuthenticated())
      return (
        <Redirect to={{ pathname: '/', state: { from: rest.location } }} />
      );

    const routeComponent = (props: any) =>
      admin && !authCtx.isAdmin() ? (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ) : (
        React.createElement(component as React.FunctionComponent, props)
      );

    return <Route {...rest} render={routeComponent} />;
  };

  return (
    <Switch>
      <Route path="/" exact component={LoginEnvironment} />
      <ProtectedRoute
        path="/panel"
        component={({ match }: { match: any }) => (
          <TabsPanel>
            <ProtectedRoute
              path={`${match.path}/registers`}
              component={RegistersEnvironment}
            />
            <ProtectedRoute
              admin
              path={`${match.path}/dashboard`}
              component={DashboardEnvironment}
            />
            <ProtectedRoute
              admin
              path={`${match.path}/users`}
              component={UsersEnvironment}
            />
          </TabsPanel>
        )}
      />
    </Switch>
  );
}
