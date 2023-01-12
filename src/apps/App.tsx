import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box } from '@/ui-components';
import routes from './routes';

function App() {
  return (
    <Box>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Box>
  );
}

export default App;
