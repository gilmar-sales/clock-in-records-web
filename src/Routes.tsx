import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TabsPanel from './atomic/ecosystems/TabsPanel';

import LoginEnvironment from './atomic/environments/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginEnvironment} />
        <Route
          path="/user"
          component={({ match }: { match: any }) => (
            <TabsPanel>
              <Route path={`${match.path}/`} render={() => 'registers'} />
            </TabsPanel>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
