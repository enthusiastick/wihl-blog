import React from 'react';
import { IndexRoute, Route } from 'react-router';
import EssayContainer from './containers/EssayContainer';

let routes = (
  <Route>
    <IndexRoute component={EssayContainer} />
  </Route>
);

export default routes;
